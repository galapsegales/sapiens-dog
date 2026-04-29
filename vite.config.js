import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        quienessomos: resolve(__dirname, 'quienessomos.html'),
        contacto: resolve(__dirname, 'contacto.html'),
        servicios: resolve(__dirname, 'servicios.html'),
        blog: resolve(__dirname, 'blog.html'),
        avisolegal: resolve(__dirname, 'avisolegal.html'),
      },
    },
  },
})

