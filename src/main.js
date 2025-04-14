import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// 创建 Vue 应用实例并挂载到 #app 节点
createApp(App).use(router).mount('#app');