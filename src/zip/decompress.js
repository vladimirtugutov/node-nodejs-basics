import { createReadStream, createWriteStream } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { createUnzip } from 'zlib';
import { pipeline } from 'stream/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const decompress = async () => {
  const inputPath = join(__dirname, 'files', 'archive.gz');
  const outputPath = join(__dirname, 'files', 'fileToCompress.txt');

  const readStream = createReadStream(inputPath);
  const unzipStream = createUnzip();
  const writeStream = createWriteStream(outputPath);

  await pipeline(readStream, unzipStream, writeStream);
};

await decompress();