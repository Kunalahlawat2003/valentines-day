import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss(),
  ],
  server: {
    host: '0.0.0.0', // Listen on all IP addresses
    port: 5173,       // You can specify a different port if needed
  },
  base: '/valentines-day/'
})
