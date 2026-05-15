import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: () => import('@/views/page1/index.vue'),
      meta: {
        title: '风动智能管理系统1',
      },
    },
    {
      path: '/dashboard2',
      name: 'Dashboard2',
      component: () => import('@/views/page2/index.vue'),
      meta: {
        title: '风动智能管理系统2',
      },
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/views/NotFound.vue'),
    },
  ],
})

router.afterEach((to) => {
  if (to.meta.title) {
    document.title = to.meta.title as string
  }
})

export default router
