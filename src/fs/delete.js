import { unlink } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const remove = async () => {
  const filePath = join(__dirname, 'files', 'fileToRemove.txt');

  try {
    await unlink(filePath);
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await remove();