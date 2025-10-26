import { createReadStream } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
  const filePath = join(__dirname, 'files', 'fileToRead.txt');
  const readStream = createReadStream(filePath);

  readStream.on('error', (err) => {
    console.error('Error:', err.message);
  });

  readStream.on('open', () => {
    readStream.pipe(process.stdout);
  });

  readStream.on("end", () => {
    console.log("");
  });
};

await read();