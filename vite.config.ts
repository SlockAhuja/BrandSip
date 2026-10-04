import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  base: '/BrandSip/',
  root: 'src',
  publicDir: '../public',
  build: {
    outDir: '../',
    emptyOutDir: false, // Don't delete the repo files!
  }
})
