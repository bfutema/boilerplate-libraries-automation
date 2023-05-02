import path from 'path';

import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [
    {
      name: 'setup',
      config: () => ({
        test: {
          setupFiles: ['./tests/global-setup.ts'],
        },
      }),
    }
  ],
  test: {
    clearMocks: true,
    coverage: { "100": true },
    globals: true,
    globalSetup: ["./tests/global-teardown.ts"],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
