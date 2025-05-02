import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteCompression from 'vite-plugin-compression';

export default defineConfig({
  base: '/IQbase/', // Must match your repository name exactly
  plugins: [
    react(), // You were missing this crucial plugin!
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
      threshold: 10240,
    }),
  ],
  build: {
    outDir: 'docs', // Required for GitHub Pages
    emptyOutDir: true, // Cleans the output directory before build
    rollupOptions: {
      output: {
        // Better cache-busting for GitHub Pages
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
      }
    }
  }
});