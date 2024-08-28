import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  server: {
    proxy: {
      '/search': 'https://serpapi.com',
    },
  },
  plugins: [react()],
})
