import viteCompression from 'vite-plugin-compression';

export default {
  base: '/IQbase/',
  plugins: [
    viteCompression({
      algorithm: 'gzip', 
      ext: '.gz',
      threshold: 10240, 
    }),
  ],
};