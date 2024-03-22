import { resolve } from 'path';

export default {
  base: './',
  root: resolve(__dirname, 'src'),
  build: {
    outDir: '../dist',
  },
  server: {
    port: 5173,
  },
};
