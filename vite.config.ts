import vue from '@vitejs/plugin-vue';
import basicSsl from '@vitejs/plugin-basic-ssl';
import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'url';

export default defineConfig({
  server: {
    cors: false,
  },
  plugins: [
    vue({
      script: {
        defineModel: true,
        propsDestructure: true,
      },
    }),
    basicSsl(),
  ],
  build: {
    lib: {
      entry: './src/main.ce.ts',
      name: 'my-custom',
      formats: ['cjs', 'umd'],
    },
  },
  resolve: {
    extensions: ['.ts', '.js', '.vue'],
    alias: [
      {
        find: '@',
        replacement: fileURLToPath(new URL('./src', import.meta.url)),
      }
    ],
  }
});
