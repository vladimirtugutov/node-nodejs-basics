import { createHash } from 'crypto';
import { createReadStream } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { pipeline } from 'stream/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const calculateHash = async () => {
  const filePath = join(__dirname, 'files', 'fileToCalculateHashFor.txt');

  const hash = createHash('sha256');
  const input = createReadStream(filePath);

  await pipeline(
    input,
    async function* (source) {
      for await (const chunk of source) {
        hash.update(chunk);
      }
    }
  );

  console.log(hash.digest('hex'));
};

await calculateHash();