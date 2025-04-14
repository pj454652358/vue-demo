import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0',
    port: 5173, // 修改为 Vite 默认端口
    https: false, // 使用 HTTP 请求
    historyApiFallback: true, // 添加路由转发支持
  },
  optimizeDeps: {
    include: ['vue', 'vue-router'],
  },
});