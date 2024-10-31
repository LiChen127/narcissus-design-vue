import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import * as path from 'path';
import viteDts from 'vite-plugin-dts';


export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    viteDts({
      insertTypesEntry: true,
      staticImport: true,
      // skipDiagnostics: true
    })
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, './index.ts'),
      name: 'narcissus-design-vue',
      fileName: format => `narcissus-design-vue.${format}.js`
    },
    outDir: path.resolve(__dirname, '../../lib'),
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})