import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'http://localhost:5173/',
  plugins: [react()],
  define: {'process.env': process.env},
  server: {
	allowedHosts: ['gycos.com.mx','www.gycos.com.mx'],
  }


})

