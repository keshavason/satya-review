import test from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { spawnSync } from 'node:child_process';
import {
  mkdir, mkdtemp, readFile, writeFile, readdir, realpath, rm, symlink, unlink,
} from 'node:fs/promises';
import path from 'node:path';
import os from 'node:os';
import { fileURLToPath, pathToFileURL } from 'node:url';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const cliPath = path.join(projectRoot, 'bin', 'satya.mjs');
const temporaryBase = path.join(os.tmpdir(), 'satya-review-tests');
const digest = value => createHash('sha256').update(value).digest('hex');

function invoke(command, root, ...args) {
  const result = spawnSync(process.execPath, [cliPath, command, root, ...args], {
    encoding: 'utf8', timeout: 15_000, windowsHide: true,
    env: { ...process.env, NO_COLOR: '1' },
  });
  assert.equal(result.error, undefined, result.error?.message);
  assert.equal(result.signal, null, `CLI terminated by ${result.signal}`);
  return result;
}

function json(result) {
  assert.ok(result.stdout.trim(), `Expected JSON stdout; stderr: ${result.stderr}`);
  try { return JSON.parse(result.stdout); }
  catch { assert.fail(`Invalid JSON stdout: ${result.stdout}\nstderr: ${result.stderr}`); }
}

function exit(result, expected) {
  assert.equal(result.status, expected,
    `Expected exit ${expected}, observed ${result.status}.\nstdout: ${result.stdout}\nstderr: ${result.stderr}`);
}

async function fixture(t) {
  await mkdir(temporaryBase, { recursive: true });
  const directory = await mkdtemp(path.join(temporaryBase, 'case-'));
  const root = path.join(directory, 'project');
  await mkdir(root);
  t.after(async () => {
    // Cleanup can delete only the real, generated fixture directory under this test's base.
    const resolved = path.resolve(directory);
    const base = path.resolve(temporaryBase);
    assert.ok(resolved.startsWith(base + path.sep));
    assert.ok(path.basename(resolved).startsWith('case-'));
    assert.equal(await realpath(resolved), resolved);
    await rm(resolved, { recursive: true, force: true });
  });
  return { directory, root };
}

async function readJson(file) { return JSON.parse(await readFile(file, 'utf8')); }
async function putJson(file, value) { await writeFile(file, JSON.stringify(value, null, 2) + '\n'); }
const reviewPath = root => path.join(root, '.satya', 'review.json');
const receiptPath = root => path.join(root, '.satya', 'receipt.json');

async function documented(t, customize = value => value) {
  const f = await fixture(t);
  const initialized = invoke('init', f.root);
  assert.ok([0, 3].includes(initialized.status), initialized.stdout + initialized.stderr);
  const review = await readJson(reviewPath(f.root));
  Object.assign(review, {
    title: 'A bounded local example',
    reviewed_at: '2026-09-20',
    reviewer: { kind: 'ai', name: 'Test reviewer, self-declared' },
    decision: { status: 'proceed', rationale: 'Proceed only with the stated local experiment.' },
    questions: {
      purpose: 'Demonstrate a local integrity record.',
      affected_parties: 'The owner of this synthetic fixture.',
      harm: 'A changed artifact could be mistaken for the reviewed artifact.',
      uncertainty: 'This review does not prove runtime behavior.',
      alternatives: 'Keep the experiment private or do not proceed.',
      authority: 'The fixture owner authorizes this local experiment only.',
      care: 'Use synthetic data and no external services.',
      repair: 'Stop, retain the old record and review corrections.',
    },
    evidence: [{
      source: 'example.txt', claim: 'The example file contains synthetic text.', classification: 'observed',
    }],
  });
  await putJson(reviewPath(f.root), customize(review));
  await writeFile(path.join(f.root, 'example.txt'), 'synthetic example\n');
  return f;
}

async function capture(root) {
  const result = invoke('capture', root);
  exit(result, 0);
  return readJson(receiptPath(root));
}

function checked(root, status = 0) {
  const result = invoke('verify', root);
  exit(result, status);
  return json(result);
}

test('init preserves an existing review byte for byte', async t => {
  const { root } = await fixture(t);
  const first = invoke('init', root);
  assert.ok([0, 3].includes(first.status), first.stdout + first.stderr);
  const content = '{"owner":"keep this exact content"}\n';
  await writeFile(reviewPath(root), content);
  exit(invoke('init', root), 2);
  assert.equal(await readFile(reviewPath(root), 'utf8'), content);
});

test('a fresh incomplete review stays pending after capture', async t => {
  const { root } = await fixture(t);
  const initialized = invoke('init', root);
  assert.ok([0, 3].includes(initialized.status), initialized.stdout + initialized.stderr);
  await writeFile(path.join(root, 'draft.txt'), 'draft');
  exit(invoke('capture', root), 3);
  const result = checked(root, 3);
  assert.equal(result.integrity, 'match');
  assert.equal(result.review, 'pending');
  assert.equal(result.decision.status, 'pending');
});

test('a documented review yields a reproducible content receipt and matching verification', async t => {
  const { root } = await documented(t);
  const receipt = await capture(root);
  assert.equal(receipt.schema, 'satya-receipt.v1');
  assert.deepEqual(receipt.files.map(file => file.path), ['example.txt']);
  assert.equal(receipt.files[0].sha256, digest(await readFile(path.join(root, 'example.txt'))));
  assert.equal(receipt.files[0].size, (await readFile(path.join(root, 'example.txt'))).length);
  assert.equal(receipt.review_sha256, digest(await readFile(reviewPath(root))));
  assert.equal(receipt.manifest_sha256, digest(JSON.stringify(receipt.files)));
  const result = checked(root);
  assert.equal(result.integrity, 'match');
  assert.equal(result.review, 'documented');
  assert.deepEqual(result.changes, { added: [], removed: [], modified: [] });
  assert.equal(result.decision.status, 'proceed');
  assert.ok(Array.isArray(result.limits) && result.limits.length > 0);
});

for (const change of ['added', 'removed', 'modified']) {
  test(`verification identifies a ${change} file without changing the receipt`, async t => {
    const { root } = await documented(t);
    await capture(root);
    const prior = await readFile(receiptPath(root), 'utf8');
    const target = change === 'added' ? 'new.txt' : 'example.txt';
    if (change === 'removed') await unlink(path.join(root, target));
    else await writeFile(path.join(root, target), 'changed synthetic content');
    const result = checked(root, 2);
    assert.equal(result.integrity, 'changed');
    assert.deepEqual(result.changes[change], [target]);
    assert.equal(await readFile(receiptPath(root), 'utf8'), prior);
  });
}

test('editing only the review invalidates its relationship to the captured files', async t => {
  const { root } = await documented(t);
  await capture(root);
  const review = await readJson(reviewPath(root));
  review.decision.rationale = 'A different declared rationale.';
  await putJson(reviewPath(root), review);
  const result = checked(root, 2);
  assert.equal(result.review, 'changed');
  assert.deepEqual(result.changes, { added: [], removed: [], modified: [] });
});

test('a receipt whose manifest digest does not match its file list is invalid', async t => {
  const { root } = await documented(t);
  const receipt = await capture(root);
  receipt.manifest_sha256 = '0'.repeat(64);
  await putJson(receiptPath(root), receipt);
  assert.equal(checked(root, 2).integrity, 'invalid');
});

test('receipt path traversal is rejected even with a recomputed manifest digest', async t => {
  const { root, directory } = await documented(t);
  const receipt = await capture(root);
  const outside = path.join(directory, 'outside.txt');
  await writeFile(outside, 'outside sentinel');
  receipt.files[0].path = '../outside.txt';
  receipt.manifest_sha256 = digest(JSON.stringify(receipt.files));
  await putJson(receiptPath(root), receipt);
  assert.equal(checked(root, 2).integrity, 'invalid');
  assert.equal(await readFile(outside, 'utf8'), 'outside sentinel');
});

test('duplicate receipt paths are invalid even when their digest is consistent', async t => {
  const { root } = await documented(t);
  const receipt = await capture(root);
  receipt.files.push({ ...receipt.files[0] });
  receipt.manifest_sha256 = digest(JSON.stringify(receipt.files));
  await putJson(receiptPath(root), receipt);
  assert.equal(checked(root, 2).integrity, 'invalid');
});

test('an unsupported receipt schema is rejected', async t => {
  const { root } = await documented(t);
  const receipt = await capture(root);
  receipt.schema = 'satya-receipt.future';
  await putJson(receiptPath(root), receipt);
  assert.equal(checked(root, 2).integrity, 'invalid');
});

test('invalid review structure cannot become a documented review', async t => {
  const { root } = await documented(t);
  await capture(root);
  const review = await readJson(reviewPath(root));
  review.schema = 'satya-review.future';
  await putJson(reviewPath(root), review);
  assert.equal(checked(root, 2).review, 'invalid');
});

test('root control directories are excluded while nested names remain accountable', async t => {
  const { root } = await documented(t);
  await mkdir(path.join(root, '.git'));
  await writeFile(path.join(root, '.git', 'sentinel'), 'git metadata');
  await mkdir(path.join(root, 'nested', '.git'), { recursive: true });
  await mkdir(path.join(root, 'nested', '.satya'), { recursive: true });
  await writeFile(path.join(root, 'nested', '.git', 'data.txt'), 'nested data');
  await writeFile(path.join(root, 'nested', '.satya', 'data.txt'), 'nested data');
  const receipt = await capture(root);
  assert.deepEqual(receipt.files.map(file => file.path), [
    'example.txt', 'nested/.git/data.txt', 'nested/.satya/data.txt',
  ]);
  checked(root);
});

test('a declared human reviewer is recorded without authenticating that person', async t => {
  const { root } = await documented(t, review => ({
    ...review, reviewer: { kind: 'human', name: 'A self-declared human name' },
  }));
  await capture(root);
  const result = checked(root);
  assert.equal(result.review, 'documented');
  assert.match(result.limits.join(' '), /identidad|identity|autenticidad|authenticity|authenticat/i);
  assert.notEqual(result.identity_verified, true);
  assert.notEqual(result.approved, true);
});

test('documented and intact does not replace a declared stop decision with permission', async t => {
  const { root } = await documented(t, review => ({
    ...review, decision: { status: 'stop', rationale: 'Do not publish this synthetic example.' },
  }));
  await capture(root);
  const result = checked(root);
  assert.equal(result.integrity, 'match');
  assert.equal(result.review, 'documented');
  assert.equal(result.decision.status, 'stop');
  assert.notEqual(result.approved, true);
});

test('report escapes untrusted HTML and Markdown in both languages', async t => {
  const attack = '<script>alert("owned")</script> ![tracker](https://example.invalid/pixel) [go](javascript:alert(1))\n# fake heading';
  const { root } = await documented(t, review => ({ ...review, title: attack }));
  await capture(root);
  const reports = [];
  for (const lang of ['es', 'en']) {
    const result = invoke('report', root, '--lang', lang);
    exit(result, 0);
    const report = result.stdout;
    assert.ok(report.trim().length > 100);
    assert.ok(report.includes('owned'), 'Untrusted content should remain readable as escaped text');
    assert.ok(!report.includes('<script>'));
    assert.ok(!report.includes('![tracker]('));
    assert.ok(!report.includes('[go](javascript:'));
    assert.ok(!report.includes('\n# fake heading'));
    reports.push(report);
  }
  assert.notEqual(reports[0], reports[1], 'Language selection must affect the report');
});

test('a .satya directory link cannot redirect init writes outside the project', async t => {
  const { root, directory } = await fixture(t);
  const outside = path.join(directory, 'outside');
  await mkdir(outside);
  const link = path.join(root, '.satya');
  try { await symlink(outside, link, process.platform === 'win32' ? 'junction' : 'dir'); }
  catch (error) {
    if (['EPERM', 'EACCES', 'ENOSYS', 'ENOTSUP'].includes(error.code)) {
      t.skip(`Directory links unavailable in this environment: ${error.code}`);
      return;
    }
    throw error;
  }
  try {
    exit(invoke('init', root), 2);
    assert.deepEqual(await readdir(outside), []);
  } finally { await unlink(link); }
});

test('a linked content file is rejected instead of silently following its target', async t => {
  const { root, directory } = await documented(t);
  const outside = path.join(directory, 'outside.txt');
  await writeFile(outside, 'outside sentinel');
  const link = path.join(root, 'linked.txt');
  try { await symlink(outside, link, 'file'); }
  catch (error) {
    if (['EPERM', 'EACCES', 'ENOSYS', 'ENOTSUP'].includes(error.code)) {
      t.skip(`File links unavailable in this environment: ${error.code}`);
      return;
    }
    throw error;
  }
  try {
    exit(invoke('capture', root), 2);
    assert.equal(await readFile(outside, 'utf8'), 'outside sentinel');
  } finally { await unlink(link); }
});

test('the local workflow succeeds with common network and subprocess APIs disabled', async t => {
  const { root, directory } = await documented(t);
  const guardPath = path.join(directory, 'deny-network.mjs');
  await writeFile(guardPath, `
import http from 'node:http';
import https from 'node:https';
import net from 'node:net';
import tls from 'node:tls';
import childProcess from 'node:child_process';
import { syncBuiltinESMExports } from 'node:module';
const denied = () => { throw new Error('TEST_NETWORK_OR_SUBPROCESS_DENIED'); };
globalThis.fetch = denied;
for (const module of [http, https]) { module.request = denied; module.get = denied; }
net.connect = denied; net.createConnection = denied; net.Socket.prototype.connect = denied;
tls.connect = denied;
for (const key of ['exec', 'execFile', 'spawn', 'fork', 'execSync', 'execFileSync', 'spawnSync']) childProcess[key] = denied;
syncBuiltinESMExports();
`);
  for (const command of ['capture', 'verify', 'report']) {
    const result = spawnSync(process.execPath, ['--import', pathToFileURL(guardPath).href, cliPath, command, root], {
      encoding: 'utf8', timeout: 15_000, windowsHide: true,
    });
    assert.equal(result.error, undefined, result.error?.message);
    exit(result, 0);
    assert.ok(!result.stderr.includes('TEST_NETWORK_OR_SUBPROCESS_DENIED'));
  }
});
