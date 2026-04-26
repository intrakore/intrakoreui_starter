import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import intrakoreui from 'intrakore-ui/vite';

// Auto-detect app and spa names from directory structure
const appName = path.basename(path.resolve(__dirname, '../..'));
const spaName = path.basename(__dirname);

export default defineConfig({
  plugins: [
    intrakoreui({
      frappeProxy: true,
      jinjaBootData: true,
      lucideIcons: true,
      buildConfig: {
        outDir: `../${appName}/public/${spaName}`,
        indexHtmlPath: `../${appName}/www/${spaName}.html`,
        emptyOutDir: true,
        sourcemap: true,
      },
    }),
    vue(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    outDir: `../${appName}/public/${spaName}`,
    emptyOutDir: true,
    target: 'es2015',
  },
  optimizeDeps: {
    include: ['intrakore-ui > feather-icons', 'showdown', 'engine.io-client'],
  },
});
