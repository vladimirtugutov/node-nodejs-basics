import { readFile } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
  const filePath = join(__dirname, 'files', 'fileToRead.txt');

  try {
    const data = await readFile(filePath, { encoding: 'utf-8' });
    console.log(data);
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await read();