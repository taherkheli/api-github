import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,       // So you can use `describe/it/expect` without importing
    environment: 'node', // Since you’re testing APIs (not browser code)    
    reporters: 'verbose', // Better CLI output
    setupFiles: ['./tests/setup.ts'],
  },
});