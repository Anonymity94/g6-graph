import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import visualizer from 'rollup-plugin-visualizer';
import vitePluginImp from 'vite-plugin-imp';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    // 按需加载 antd 样式
    // @see: https://github.com/vitejs/vite/issues/1389
    vitePluginImp({
      libList: [
        {
          libName: 'antd',
          style: (name) => `antd/es/${name}/style`,
        },
      ],
    }),
  ],
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
});
