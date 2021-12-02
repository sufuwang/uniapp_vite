import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
const path = require('path')

const resolve = (dir) => path.resolve(__dirname, dir)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
  ],
  resolve: {
    alias: {
      '@styles': resolve('src/styles'), 
    }
  }
})
