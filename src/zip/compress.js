import { createReadStream, createWriteStream } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { createGzip } from 'zlib';
import { pipeline } from 'stream/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compress = async () => {
  const inputPath = join(__dirname, 'files', 'fileToCompress.txt');
  const outputPath = join(__dirname, 'files', 'archive.gz');

  const readStream = createReadStream(inputPath);
  const gzipStream = createGzip();
  const writeStream = createWriteStream(outputPath);

  await pipeline(readStream, gzipStream, writeStream);
};

await compress();