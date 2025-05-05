import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Get API URL from environment variable or default to localhost
const apiUrl = process.env.VITE_API_URL || 'http://localhost:8080';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': apiUrl,  // Proxy to the backend API
    },
  },
  root: '.',  // Set root directory to the current folder where `index.html` and `vite.config.js` are located
  build: {
    outDir: './build',  // Output build files to `build` folder
    emptyOutDir: true,  // Clean the `build` folder before building
  },
})
