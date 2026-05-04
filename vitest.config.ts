import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  test: {
    // jsdom simulates a browser DOM environment, required for React Testing Library
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    globals: true,
  },
  resolve: {
    // Mirror the @/ path alias defined in tsconfig.json so imports resolve correctly in tests
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
})
