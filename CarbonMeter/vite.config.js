import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/CarbonMeter/', // Ensure this is the correct base path for your repository
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
})

