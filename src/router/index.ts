import lc from '@/Utitls/cache';
import { firstMenu } from '@/Utitls/map-menu';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/views/main/main.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to) => {
  if (to.path !== '/login') {
    const token = lc.getCache('token');
    if (!token) {
      router.push('/login');
    }
  }

  if (to.path == '/main') {
    router.push(firstMenu.url);
  }
});

export default router;
