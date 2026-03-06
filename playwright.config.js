// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = defineConfig({
  testDir: './tests',
  timeout: 50 * 1000, // 50 seconds
  expect: {
    timeout: 5000, // 5 seconds
  },
  reporter: 'html',
  use: {
    browserName: 'chromium',
    headless: false,
  },
});

export default config;
