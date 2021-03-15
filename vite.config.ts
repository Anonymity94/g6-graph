import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import visualizer from 'rollup-plugin-visualizer'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), []],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  build: {
    rollupOptions: {
      plugins: [visualizer()],
    },
  },
})
