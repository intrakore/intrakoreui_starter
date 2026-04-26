import path from "node:path"
import vue from "@vitejs/plugin-vue"
import intrakoreui from "intrakore-ui/vite"
import { defineConfig } from "vite"

const appName = path.basename(path.resolve(__dirname, "../.."))

export default defineConfig({
  plugins: [
    intrakoreui({
      frappeProxy: true,
      jinjaBootData: true,
      lucideIcons: true,
      buildConfig: {
        outDir: `../${appName}/public/frontend`,
        indexHtmlPath: `../${appName}/www/frontend.html`,
        emptyOutDir: true,
        sourcemap: true,
      },
    }),
    vue(),
  ],
  build: {
    chunkSizeWarningLimit: 1500,
    outDir: `../${appName}/public/frontend`,
    emptyOutDir: true,
    target: "es2015",
    sourcemap: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "tailwind.config.js": path.resolve(__dirname, "tailwind.config.js"),
    },
  },
  optimizeDeps: {
    include: ["feather-icons", "showdown", "highlight.js/lib/core", "interactjs"],
  },
  server: {
    port: 8080,
    allowedHosts: true,
    proxy: {
      '^/(app|api|assets|files|private)': {
        target: 'http://localhost:8000',
        changeOrigin: true,
      }
    }
  },
})