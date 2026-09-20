import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

export const QUESTIONS = Object.freeze([
  'purpose', 'affected_parties', 'harm', 'uncertainty',
  'alternatives', 'authority', 'care', 'repair',
]);

export const LIMITS = Object.freeze([
  'Hashes compare content; they are not signatures, proof of authorship, or verified reviewer identity.',
  'A documented review is not approval, certification, legal compliance, or permission to act; a stop decision remains a stop.',
  'This local snapshot is not a filesystem transaction. Stop concurrent writes while capturing or verifying; a file may change after a check.',
  'The receipt and review are editable local files. An actor able to replace both can create a new internally consistent receipt.',
  'Only regular files are inventoried. Root .git and .satya directories are excluded; permissions and empty directories are not recorded.',
]);

const DECISIONS = new Set(['pending', 'proceed', 'revise', 'stop']);
const CLASSIFICATIONS = new Set(['observed', 'tested', 'inferred', 'recommended', 'unknown']);
const HASH = /^[a-f0-9]{64}$/;
const digest = (data) => crypto.createHash('sha256').update(data).digest('hex');
const object = (value) => value !== null && typeof value === 'object' && !Array.isArray(value);
const nonempty = (value) => typeof value === 'string' && value.trim().length > 0;
const fail = (message) => { throw new Error(message); };

function validIso(value) {
  if (typeof value !== 'string') return false;
  const pattern = /^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d{1,3})?(?:Z|[+-]\d{2}:\d{2}))?$/;
  if (!pattern.test(value) || Number.isNaN(Date.parse(value))) return false;
  const [year, month, day] = value.slice(0, 10).split('-').map(Number);
  const date = new Date(0);
  date.setUTCFullYear(year, month - 1, day);
  date.setUTCHours(0, 0, 0, 0);
  if (date.getUTCFullYear() !== year || date.getUTCMonth() !== month - 1 || date.getUTCDate() !== day) return false;
  if (value.length > 10) {
    if (Number(value.slice(11, 13)) > 23 || Number(value.slice(14, 16)) > 59 || Number(value.slice(17, 19)) > 59) return false;
    const zone = value.match(/[+-](\d{2}):(\d{2})$/);
    if (zone && (Number(zone[1]) > 23 || Number(zone[2]) > 59)) return false;
  }
  return true;
}

function ensureDirectory(directory, label) {
  const stat = fs.lstatSync(directory);
  if (stat.isSymbolicLink() || !stat.isDirectory()) fail(`${label} must be a real directory, not a link.`);
  return stat;
}

function context(root, createMetadata = false) {
  if (typeof root !== 'string' || root.length === 0) fail('A project root is required.');
  const supplied = path.resolve(root);
  ensureDirectory(supplied, 'Project root');
  const canonical = fs.realpathSync(supplied);
  const metadata = path.join(canonical, '.satya');
  if (createMetadata && !exists(metadata)) {
    try { fs.mkdirSync(metadata, { mode: 0o700 }); }
    catch (error) { if (error.code !== 'EEXIST') throw error; }
  }
  ensureDirectory(metadata, '.satya');
  return { root: canonical, metadata };
}

function exists(filename) {
  try { fs.lstatSync(filename); return true; }
  catch (error) { if (error.code === 'ENOENT') return false; throw error; }
}

function sameFile(a, b) {
  return a.dev === b.dev && a.ino === b.ino && a.size === b.size
    && a.mtimeMs === b.mtimeMs && a.ctimeMs === b.ctimeMs;
}

function regularContents(filename) {
  const before = fs.lstatSync(filename);
  if (before.isSymbolicLink() || !before.isFile()) fail(`Not a regular file: ${filename}`);
  const flags = fs.constants.O_RDONLY | (fs.constants.O_NOFOLLOW ?? 0);
  const fd = fs.openSync(filename, flags);
  try {
    const opened = fs.fstatSync(fd);
    if (!opened.isFile() || !sameFile(before, opened)) fail(`File changed while opening: ${filename}`);
    const contents = fs.readFileSync(fd);
    if (!sameFile(opened, fs.fstatSync(fd)) || !sameFile(opened, fs.lstatSync(filename))) {
      fail(`File changed while reading: ${filename}`);
    }
    return contents;
  } finally { fs.closeSync(fd); }
}

function metadataContents(ctx, name) {
  ensureDirectory(ctx.root, 'Project root');
  ensureDirectory(ctx.metadata, '.satya');
  return regularContents(path.join(ctx.metadata, name));
}

function parseJson(contents, label) {
  try { return JSON.parse(contents.toString('utf8')); }
  catch { fail(`${label} is not valid JSON.`); }
}

export function validateReview(review) {
  if (!object(review) || review.schema !== 'satya-review.v1') fail('Invalid review schema.');
  if (typeof review.title !== 'string' || typeof review.reviewed_at !== 'string') fail('Review title and reviewed_at must be strings.');
  if (review.reviewed_at !== '' && !validIso(review.reviewed_at)) fail('reviewed_at must be an ISO date or timezone-qualified timestamp.');
  if (!object(review.reviewer) || !['ai', 'human'].includes(review.reviewer.kind) || typeof review.reviewer.name !== 'string') fail('Invalid declared reviewer.');
  if (!object(review.decision) || !DECISIONS.has(review.decision.status) || typeof review.decision.rationale !== 'string') fail('Invalid review decision.');
  if (!object(review.questions) || QUESTIONS.some((key) => typeof review.questions[key] !== 'string')) fail('All eight question fields must be strings.');
  if (!Array.isArray(review.evidence)) fail('Review evidence must be an array.');
  for (const item of review.evidence) {
    if (!object(item) || typeof item.source !== 'string' || typeof item.claim !== 'string' || !CLASSIFICATIONS.has(item.classification)) fail('Invalid evidence item.');
  }
  const pending = [];
  if (!nonempty(review.title)) pending.push('title');
  if (!nonempty(review.reviewed_at)) pending.push('reviewed_at');
  if (!nonempty(review.reviewer.name)) pending.push('reviewer.name');
  if (review.decision.status === 'pending') pending.push('decision.status');
  if (!nonempty(review.decision.rationale)) pending.push('decision.rationale');
  for (const key of QUESTIONS) if (!nonempty(review.questions[key])) pending.push(`questions.${key}`);
  if (review.evidence.length === 0) pending.push('evidence');
  review.evidence.forEach((item, index) => {
    if (!nonempty(item.source)) pending.push(`evidence[${index}].source`);
    if (!nonempty(item.claim)) pending.push(`evidence[${index}].claim`);
  });
  return { status: pending.length === 0 ? 'documented' : 'pending', pending };
}

function validManifestPath(value) {
  if (typeof value !== 'string' || value.length === 0 || value.includes('\\') || value.includes('\0')
    || path.posix.isAbsolute(value) || path.win32.isAbsolute(value) || /^[a-zA-Z]:/.test(value)) return false;
  const parts = value.split('/');
  if (parts.some((part) => part === '' || part === '.' || part === '..')) return false;
  if (parts[0] === '.satya' || (parts[0] === '.git' && parts.length > 1)) return false;
  return true;
}

export function validateReceipt(receipt) {
  if (!object(receipt) || receipt.schema !== 'satya-receipt.v1') fail('Invalid receipt schema.');
  if (!validIso(receipt.created_at)) fail('Invalid receipt created_at.');
  if (typeof receipt.review_sha256 !== 'string' || !HASH.test(receipt.review_sha256)
    || typeof receipt.manifest_sha256 !== 'string' || !HASH.test(receipt.manifest_sha256)) fail('Invalid receipt hash.');
  if (!Array.isArray(receipt.files)) fail('Receipt files must be an array.');
  const seen = new Set();
  let previous = null;
  for (const file of receipt.files) {
    if (!object(file) || !validManifestPath(file.path) || !Number.isSafeInteger(file.size) || file.size < 0
      || typeof file.sha256 !== 'string' || !HASH.test(file.sha256)) fail('Invalid manifest file entry.');
    if (seen.has(file.path)) fail(`Duplicate manifest path: ${file.path}`);
    if (previous !== null && file.path < previous) fail('Manifest files must be sorted by path.');
    seen.add(file.path);
    previous = file.path;
  }
  if (digest(JSON.stringify(receipt.files)) !== receipt.manifest_sha256) fail('Manifest digest does not match its file entries.');
  return receipt;
}

function inventory(ctx) {
  const result = [];
  function walk(directory, prefix) {
    ensureDirectory(directory, 'Inventory directory');
    const names = fs.readdirSync(directory).sort();
    for (const name of names) {
      const filename = path.join(directory, name);
      const relative = prefix ? `${prefix}/${name}` : name;
      const stat = fs.lstatSync(filename);
      if (stat.isSymbolicLink()) fail(`Links are not supported: ${relative}`);
      if (stat.isDirectory()) {
        if (!prefix && (name === '.git' || name === '.satya')) continue;
        walk(filename, relative);
      } else if (stat.isFile()) {
        if (!validManifestPath(relative)) fail(`Unsupported manifest path: ${relative}`);
        const contents = regularContents(filename);
        result.push({ path: relative, size: contents.byteLength, sha256: digest(contents) });
      } else fail(`Not a regular file or directory: ${relative}`);
    }
  }
  walk(ctx.root, '');
  return result.sort((a, b) => a.path < b.path ? -1 : a.path > b.path ? 1 : 0);
}

function atomicJson(ctx, name, value, exclusive = false) {
  ensureDirectory(ctx.root, 'Project root');
  ensureDirectory(ctx.metadata, '.satya');
  const target = path.join(ctx.metadata, name);
  if (exists(target)) {
    if (exclusive) fail(`${name} already exists; it was not overwritten.`);
    const stat = fs.lstatSync(target);
    if (stat.isSymbolicLink() || !stat.isFile()) fail(`Metadata target must be a regular file: ${name}`);
  }
  const temporary = path.join(ctx.metadata, `.${name}.${crypto.randomUUID()}.tmp`);
  let fd;
  try {
    fd = fs.openSync(temporary, 'wx', 0o600);
    fs.writeFileSync(fd, `${JSON.stringify(value, null, 2)}\n`, 'utf8');
    fs.fsyncSync(fd);
    fs.closeSync(fd);
    fd = undefined;
    ensureDirectory(ctx.root, 'Project root');
    ensureDirectory(ctx.metadata, '.satya');
    if (exclusive) fs.linkSync(temporary, target);
    else {
      if (exists(target)) {
        const stat = fs.lstatSync(target);
        if (stat.isSymbolicLink() || !stat.isFile()) fail(`Metadata target must be a regular file: ${name}`);
      }
      fs.renameSync(temporary, target);
    }
  } finally {
    if (fd !== undefined) fs.closeSync(fd);
    if (exists(temporary)) fs.unlinkSync(temporary);
  }
}

export function initReview(root) {
  const ctx = context(root, true);
  const review = {
    schema: 'satya-review.v1',
    title: '',
    reviewed_at: '',
    reviewer: { kind: 'ai', name: '' },
    decision: { status: 'pending', rationale: '' },
    questions: Object.fromEntries(QUESTIONS.map((key) => [key, ''])),
    evidence: [],
  };
  atomicJson(ctx, 'review.json', review, true);
  return { status: 'created', review: 'pending', decision: review.decision, pending: validateReview(review).pending, limits: [...LIMITS] };
}

export function capture(root) {
  const ctx = context(root);
  const contents = metadataContents(ctx, 'review.json');
  validateReview(parseJson(contents, 'review.json'));
  const files = inventory(ctx);
  const reviewHash = digest(contents);
  if (digest(metadataContents(ctx, 'review.json')) !== reviewHash) fail('Review changed during capture.');
  const receipt = {
    schema: 'satya-receipt.v1',
    created_at: new Date().toISOString(),
    files,
    review_sha256: reviewHash,
    manifest_sha256: digest(JSON.stringify(files)),
  };
  atomicJson(ctx, 'receipt.json', receipt);
  return { status: 'captured', created_at: receipt.created_at, file_count: files.length, ...verify(root) };
}

export function verify(root) {
  const changes = { added: [], removed: [], modified: [] };
  let decision = null;
  try {
    const ctx = context(root);
    const contents = metadataContents(ctx, 'review.json');
    const review = parseJson(contents, 'review.json');
    const completeness = validateReview(review);
    decision = review.decision;
    const receipt = validateReceipt(parseJson(metadataContents(ctx, 'receipt.json'), 'receipt.json'));
    const current = inventory(ctx);
    const expected = new Map(receipt.files.map((entry) => [entry.path, entry]));
    for (const entry of current) {
      const old = expected.get(entry.path);
      if (!old) changes.added.push(entry.path);
      else if (old.sha256 !== entry.sha256 || old.size !== entry.size) changes.modified.push(entry.path);
      expected.delete(entry.path);
    }
    changes.removed = [...expected.keys()].sort();
    const reviewChanged = digest(contents) !== receipt.review_sha256;
    const changed = reviewChanged || Object.values(changes).some((items) => items.length > 0);
    if (digest(metadataContents(ctx, 'review.json')) !== digest(contents)) fail('Review changed during verification.');
    return {
      integrity: changed ? 'changed' : 'match',
      review: reviewChanged ? 'changed' : completeness.status,
      decision,
      changes,
      pending: completeness.pending,
      limits: [...LIMITS],
    };
  } catch (error) {
    return { integrity: 'invalid', review: 'invalid', decision, changes, error: error.message, limits: [...LIMITS] };
  }
}

function escapeMarkdown(value) {
  return String(value)
    .replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
    .replace(/[\\`*_{}\[\]()!|#+\-.=:]/g, '\\$&')
    .replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f\u202a-\u202e\u2066-\u2069]/g, '')
    .replace(/\r\n?|\n/g, ' ');
}

export function renderReport(root, lang = 'en') {
  if (!['es', 'en'].includes(lang)) fail('Report language must be es or en.');
  const es = lang === 'es';
  const result = verify(root);
  let review = null;
  try {
    const ctx = context(root);
    const candidate = parseJson(metadataContents(ctx, 'review.json'), 'review.json');
    validateReview(candidate);
    review = candidate;
  } catch { /* Invalid content is not trusted as a review. */ }
  const labels = es ? {
    purpose: 'Propósito', affected_parties: 'Personas afectadas', harm: 'Daño', uncertainty: 'Incertidumbre',
    alternatives: 'Alternativas', authority: 'Autoridad', care: 'Cuidado y recursos', repair: 'Reparación',
  } : {
    purpose: 'Purpose', affected_parties: 'Affected parties', harm: 'Harm', uncertainty: 'Uncertainty',
    alternatives: 'Alternatives', authority: 'Authority', care: 'Care and resources', repair: 'Repair',
  };
  const value = (text) => nonempty(text) ? escapeMarkdown(text) : (es ? '(pendiente)' : '(pending)');
  const lines = [
    '# Satya Review', '',
    `${es ? 'Integridad' : 'Integrity'}: **${result.integrity}**`, '',
    `${es ? 'Estado de documentación' : 'Documentation status'}: **${result.review}**`, '',
  ];
  if (result.error) lines.push(`${es ? 'Error' : 'Error'}: ${escapeMarkdown(result.error)}`, '');
  if (review) {
    lines.push(`${es ? 'Título' : 'Title'}: ${value(review.title)}`, '',
      `${es ? 'Fecha declarada' : 'Declared date'}: ${value(review.reviewed_at)}`, '',
      `${es ? 'Revisor declarado (identidad no verificada)' : 'Declared reviewer (identity not verified)'}: ${value(review.reviewer.name)} (${review.reviewer.kind})`, '',
      `${es ? 'Decisión declarada' : 'Declared decision'}: **${review.decision.status}**`, '',
      `${es ? 'Motivo' : 'Rationale'}: ${value(review.decision.rationale)}`, '',
      es ? '## Ocho preguntas' : '## Eight questions', '');
    for (const key of QUESTIONS) lines.push(`### ${labels[key]}`, '', value(review.questions[key]), '');
    lines.push(es ? '## Evidencias declaradas' : '## Declared evidence', '');
    if (review.evidence.length === 0) lines.push(es ? '(pendientes)' : '(pending)', '');
    review.evidence.forEach((item, index) => lines.push(
      `${index + 1}. ${es ? 'Clasificación' : 'Classification'}: **${item.classification}**. ${es ? 'Fuente' : 'Source'}: ${value(item.source)}. ${es ? 'Afirmación' : 'Claim'}: ${value(item.claim)}`, '',
    ));
  } else lines.push(es ? 'No se puede presentar una revisión válida.' : 'A valid review cannot be presented.', '');
  lines.push(es ? '## Pendientes' : '## Pending items', '');
  if (result.pending?.length) lines.push(...result.pending.map((item) => `- ${escapeMarkdown(item)}`), '');
  else lines.push(es ? 'No hay campos vacíos detectados en una revisión válida, o la revisión es inválida; consulte el estado anterior. La completitud no valida el contenido.' : 'No empty fields were detected in a valid review, or the review is invalid; see the status above. Completeness does not validate the content.', '');
  lines.push(es ? '## Cambios de archivos' : '## File changes', '');
  for (const [key, label] of Object.entries(es ? { added: 'Añadidos', removed: 'Eliminados', modified: 'Modificados' } : { added: 'Added', removed: 'Removed', modified: 'Modified' })) {
    lines.push(`${label}: ${result.changes[key].length ? result.changes[key].map(escapeMarkdown).join(', ') : '0'}`, '');
  }
  lines.push(es ? '## Límites' : '## Limits', '');
  const limits = es ? [
    'Los hashes comparan contenido; no son firmas, pruebas de autoría ni verificación de la identidad del revisor.',
    'Una revisión documentada no equivale a aprobación, certificación, cumplimiento legal ni permiso para actuar. La decisión stop sigue siendo una decisión de detenerse.',
    'La captura local no es una transacción del sistema de archivos. Detenga las escrituras concurrentes al capturar o verificar; un archivo puede cambiar después de comprobarse.',
    'El recibo y la revisión son archivos locales editables. Quien pueda sustituir ambos puede crear un recibo nuevo internamente coherente.',
    'El inventario contiene archivos regulares. Se excluyen los directorios .git y .satya de la raíz; no se registran permisos ni directorios vacíos.',
    'Las respuestas, fuentes, clasificaciones y decisiones se declaran, no se contrastan automáticamente. No se ejecutan pruebas ni se consulta la red.',
  ] : [...LIMITS, 'Answers, sources, classifications, and decisions are declared, not independently checked. No tests are executed and no network is queried.'];
  lines.push(...limits.map((limit) => `- ${limit}`), '');
  return lines.join('\n');
}

export function exitCode(result) {
  if (result.integrity === 'invalid' || result.integrity === 'changed' || result.review === 'invalid' || result.review === 'changed') return 2;
  return result.integrity === 'match' && result.review === 'documented' ? 0 : 3;
}
