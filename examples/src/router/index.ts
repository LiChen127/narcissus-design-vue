import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/button', component: () => import('@/components/Button/index.vue') },
  { path: '/layout', component: () => import('@/components/Layout/index.vue') },
  { path: '/deliver', component: () => import('@/components/Deliver/index.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;
