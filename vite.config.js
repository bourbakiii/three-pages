import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path";
import svgLoader from 'vite-svg-loader'

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/scss/style.scss";`
      }
    },
  },

  resolve: {
    alias: {
      find: '@',
      '@': resolve(__dirname, './src'),
    },
  },
  plugins: [vue(), svgLoader()],

})
