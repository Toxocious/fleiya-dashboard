import * as path from 'path';

import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react';
import { plugin as mdPlugin } from 'vite-plugin-markdown';

// https://vitejs.dev/config/
export default defineConfig({
  publicDir: '../static',
  base: '../static',
  root: './',
  build: {
    outDir: './build',
  },
  plugins: [react(), mdPlugin(), tsconfigPaths()],
  resolve: {
    extensions: ['.js', '.mjs', '.ts', '.tsx', '.md'],
    alias: {
      '@actions': path.resolve(__dirname, './actions'),
      '@api': path.resolve(__dirname, './api'),
      '@components': path.resolve(__dirname, './components'),
      '@constants': path.resolve(__dirname, './constants'),
      '@context': path.resolve(__dirname, './context'),
      '@features': path.resolve(__dirname, './features'),
      '@hooks': path.resolve(__dirname, './hooks'),
      '@reducers': path.resolve(__dirname, './reducers'),
      '@routes': path.resolve(__dirname, './routes'),
      '@util': path.resolve(__dirname, './util'),
    },
  },
});
