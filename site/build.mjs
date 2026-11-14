import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const here = fileURLToPath(new URL('.', import.meta.url));
const data = await readFile(new URL('../src/demo-data.mjs', import.meta.url), 'utf8');
const store = await readFile(new URL('../src/demo-store.mjs', import.meta.url), 'utf8');
await writeFile(new URL('./dist/demo-data.js', import.meta.url), data);
await writeFile(new URL('./dist/demo-store.js', import.meta.url), store.replace('./demo-data.mjs', './demo-data.js'));
console.log(`Synchronized demo adapter into ${here}dist`);
