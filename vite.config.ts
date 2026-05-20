import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages project-site base path. Local dev still works at '/'.
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/fifth-orchard/' : '/',
  plugins: [react()],
})
