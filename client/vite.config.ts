import * as path from 'path';

import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  root: './',
  base: './',
  build: {
    outDir: './build',
  },
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, './assets'),
      '@components': path.resolve(__dirname, './components'),
      '@constants': path.resolve(__dirname, './constants'),
      '@routes': path.resolve(__dirname, './routes'),
    },
  },
});
