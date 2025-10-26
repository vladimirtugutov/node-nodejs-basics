import { readdir } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const list = async () => {
  const folderPath = join(__dirname, 'files');

  try {
    const files = await readdir(folderPath);
    console.log(files);
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await list();