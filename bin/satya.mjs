#!/usr/bin/env node
import { initReview, capture, verify, renderReport, exitCode, LIMITS } from '../src/core.mjs';

const [command, root, ...options] = process.argv.slice(2);
try {
  if (!['init', 'capture', 'verify', 'report'].includes(command) || !root) {
    throw new Error('Usage: satya <init|capture|verify|report> <root> [--lang es|en]');
  }
  let lang = 'en';
  if (command === 'report') {
    if (options.length !== 0 && (options.length !== 2 || options[0] !== '--lang' || !['es', 'en'].includes(options[1]))) {
      throw new Error('Usage: satya report <root> [--lang es|en]');
    }
    if (options.length) lang = options[1];
    const result = verify(root);
    process.stdout.write(renderReport(root, lang));
    process.exitCode = exitCode(result);
  } else {
    if (options.length !== 0) throw new Error(`Unexpected arguments for ${command}.`);
    const result = command === 'init' ? initReview(root) : command === 'capture' ? capture(root) : verify(root);
    process.stdout.write(`${JSON.stringify(result, null, 2)}\n`);
    process.exitCode = exitCode(result);
  }
} catch (error) {
  process.stderr.write(`${JSON.stringify({ integrity: 'invalid', review: 'invalid', error: error.message, limits: [...LIMITS] }, null, 2)}\n`);
  process.exitCode = 2;
}
