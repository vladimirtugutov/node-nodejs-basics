import { spawn } from 'child_process';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const spawnChildProcess = (args) => {
  const scriptPath = join(__dirname, 'files', 'script.js');

  const child = spawn('node', [scriptPath, ...args], {
    stdio: ['pipe', 'pipe', 'inherit']
  });

  process.stdin.pipe(child.stdin);

  child.stdout.pipe(process.stdout);

  child.on('error', (error) => {
    console.error('Child process error:', error);
  });

  child.on('exit', (code) => {
    if (code !== 0) {
      console.error(`Child process exited with code ${code}`);
    }
    process.exit(code);
  });
};

spawnChildProcess(['arg1', 'arg2']);
