import { ROUTES } from '@/shared/consts'
import FluxoDeCaixaView from '@/views/FluxoDeCaixaView.vue'
import HomeView from '@/views/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: ROUTES.HOME.NAME,
      component: HomeView
    },
    {
      path: '/fluxo-de-caixa/:id',
      name: ROUTES.CASH_FLOW.ROOT.NAME,
      component: FluxoDeCaixaView
    }
  ]
})

export default router
