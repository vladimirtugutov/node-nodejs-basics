import { writeFile, access } from 'fs/promises';
import { constants } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const create = async () => {
  const filePath = join(__dirname, 'files', 'fresh.txt');

  try {
    await access(filePath, constants.F_OK);
    throw new Error('FS operation failed');
  } catch (err) {
    if (err.code === 'ENOENT') {
      await writeFile(filePath, 'I am fresh and young', { flag: 'wx' });
    } else {
      throw new Error('FS operation failed');
    }
  }
};

await create();