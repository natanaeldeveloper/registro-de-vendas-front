import { ROUTES } from '@/shared/consts'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: ROUTES.HOME.NAME,
      component: import('@/views/HomeView.vue')
    },
    {
      path: '/fluxo-de-caixa/:id',
      name: ROUTES.CASH_FLOW.ROOT.NAME,
      component: import('@/views/FluxoDeCaixaView.vue')
    }
  ]
})

export default router
