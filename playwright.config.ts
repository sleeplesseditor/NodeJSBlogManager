import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '.env') });

export default defineConfig({
  testDir: './tests/e2e',
  testMatch: /.*\.spec\.ts/,
  use: {
    baseURL: 'http://127.0.0.1:5173/',
    headless: true,
    launchOptions: { channel: 'chromium' },
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
  },
  webServer: {
    command: 'npm run client',
    url: 'http://127.0.0.1:5173/',
    reuseExistingServer: !process.env.CI,
    timeout: 120 * 1000,
  },
});