import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/IQbase/', // Must match your repo name exactly
  plugins: [react()],
  build: {
    outDir: 'docs',       // GitHub Pages needs either 'docs' or gh-pages branch
    emptyOutDir: true,    // Clear folder before rebuild
    assetsDir: 'assets',  // Organize assets in /assets
  }
});