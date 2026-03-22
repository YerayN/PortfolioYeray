// ============================================================
// vite.config.js — Configuración de Vite con plugin de React.
// ============================================================
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
