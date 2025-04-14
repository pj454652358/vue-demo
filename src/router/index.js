import { createRouter, createWebHistory } from 'vue-router';
import ExampleComponent from '../components/ExampleComponent.vue';
import NotFoundComponent from '../components/NotFoundComponent.vue';
import UserManagement from '../components/UserManagement.vue';
import RoleManagement from '../components/RoleManagement.vue';
import ReportPage from '../components/ReportPage.vue';
import LoginPage from '../components/LoginPage.vue';

const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage,
  },
  {
    path: '/users',
    name: 'UserManagement',
    component: UserManagement,
  },
  {
    path: '/roles',
    name: 'RoleManagement',
    component: RoleManagement,
  },
  {
    path: '/report',
    name: 'ReportPage',
    component: ReportPage,
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

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('auth'); // 模拟权限校验
  if (to.path !== '/login' && !isAuthenticated) {
    next('/login');
  } else {
    next();
  }
});

export default router;