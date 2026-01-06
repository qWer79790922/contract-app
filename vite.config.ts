import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 合併後的設定：只會有一個 export default
export default defineConfig({
  plugins: [react()],
  base: '/contract-app/', // 這裡保留你的倉庫路徑
})
