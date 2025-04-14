import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0',
    port: 5173, // 修改为 Vite 默认端口
    https: false, // 使用 HTTP 请求
    historyApiFallback: true, // 添加路由转发支持
    open: true, // 启动时自动打开浏览器
    setupMiddlewares: (middlewares, server) => {
      // 移除直接返回 404 的逻辑，确保未匹配路径由 Vue Router 处理
      return middlewares;
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/variables.scss";`,
      },
    },
  },
  optimizeDeps: {
    include: ['vue', 'vue-router'],
  },
});