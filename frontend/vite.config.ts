import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react()],
  build: { manifest: true },
  base: process.env.NODE_ENV === "production" ? "/static/" : "/",
  root: ".",
  define: { 'process.env': {}, },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
})