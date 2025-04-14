import { createRouter, createWebHistory } from 'vue-router';
import ExampleComponent from '../components/ExampleComponent.vue';
import NotFoundComponent from '../components/NotFoundComponent.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: ExampleComponent,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFoundComponent,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;