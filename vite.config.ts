import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Loader from './loader'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    postcss: {
      plugins: [
        Loader()
      ]
    }
  }
})
