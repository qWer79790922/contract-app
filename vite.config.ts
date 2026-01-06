import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/contract-app/', // 確保這裡是你目前的倉庫名稱
})
