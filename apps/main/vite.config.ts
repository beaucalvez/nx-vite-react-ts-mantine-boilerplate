import path from 'node:path'
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import { join } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/partialupgrade/',
  build: {
    outDir: '../../dist/apps/main',
    emptyOutDir: true,
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('mantine')) {
            return '@mantine'
          }
          if (id.includes('node_modules')) {
            return 'vendor'
          }
        },
      },
    },
  },
  plugins: [tsconfigPaths(), react()],
  server: {
    host: false,
    port: 3000,
  },
  resolve: {
    alias: {
      '@': join(__dirname, 'src'),
    },
  },
})
