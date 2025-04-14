import { createRouter, createWebHistory } from 'vue-router';
import ExampleComponent from '../components/ExampleComponent.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: ExampleComponent,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;