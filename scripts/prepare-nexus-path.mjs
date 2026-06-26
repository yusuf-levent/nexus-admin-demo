import { cp, mkdir, readdir, rm } from 'node:fs/promises';
import path from 'node:path';

const outDir = path.resolve('out');
const pathDir = path.join(outDir, 'nexus');

await rm(pathDir, { recursive: true, force: true });
await mkdir(pathDir, { recursive: true });

const entries = await readdir(outDir);

for (const entry of entries) {
  if (entry === 'nexus') {
    continue;
  }

  await cp(path.join(outDir, entry), path.join(pathDir, entry), {
    recursive: true
  });
}
