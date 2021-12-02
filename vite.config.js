import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const path = require('path')
const resolve = (dir) => path.resolve(__dirname, dir)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@styles': resolve('./src/styles')
    }
  }
})
