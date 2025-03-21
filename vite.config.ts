import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss()
  ],
  server:{
    proxy: {
      '/api/proxy': {
        target: 'http://3.145.50.116',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/proxy/, '/api/answer')
      }
    }
  }
})
