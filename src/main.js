import { createApp } from 'vue';
import App from './App.vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import router from './router';
import Mock from 'mockjs';
import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    welcome: 'Welcome',
    logout: 'Logout',
  },
  zh: {
    welcome: '欢迎',
    logout: '退出登录',
  },
};

const i18n = createI18n({
  locale: 'zh',
  messages,
});

const app = createApp(App);
app.use(ElementPlus);
app.use(router);
app.use(i18n);
app.mount('#app');

Mock.mock('/api/users', 'get', (options) => {
  const { page, size } = JSON.parse(options.body);
  const total = 100;
  const users = Array.from({ length: size }, (_, i) => ({
    id: i + 1 + (page - 1) * size,
    name: `用户${i + 1}`,
    email: `user${i + 1}@example.com`,
  }));
  return { total, users };
});

Mock.mock('/api/roles', 'get', (options) => {
  const { page, size } = JSON.parse(options.body);
  const total = 50;
  const roles = Array.from({ length: size }, (_, i) => ({
    id: i + 1 + (page - 1) * size,
    name: `角色${i + 1}`,
  }));
  return { total, roles };
});