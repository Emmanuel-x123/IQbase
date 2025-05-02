import viteCompression from 'vite-plugin-compression';

export default {
  plugins: [
    viteCompression({
      algorithm: 'gzip', 
      ext: '.gz',
      threshold: 10240, 
    }),
  ],
};