import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import autoImport from 'unplugin-auto-import/vite'
const path = require('path')

const resolve = (dir) => path.resolve(__dirname, dir)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
    autoImport(),
  ],
  resolve: {
    alias: {
      '@styles': resolve('src/styles'), 
    }
  }
})
