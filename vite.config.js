import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/user': {
        target: 'https://whynsp-4001.csb.app/',
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/user/, '')
      }
    },
  },
  plugins: [react()],
})
