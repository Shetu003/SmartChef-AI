import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://localhost:8080',
    },
  },
  root: '.',  // Set root directory to the current folder where `index.html` and `vite.config.js` are located
  build: {
    outDir: './build',  // Output build files to `build` folder
    emptyOutDir: true,  // Clean the `build` folder before building
  },
})
