import { ROUTES } from '@/shared/consts'
import ConfiguracoesView from '@/views/ConfiguracoesView.vue'
import DetalhesCompraView from '@/views/DetalhesCompraView.vue'
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
      path: '/configuracao',
      name: ROUTES.CONFIG.NAME,
      component: ConfiguracoesView
    },
    {
      path: '/fluxo-de-caixa/:id',
      name: ROUTES.CASH_FLOW.ROOT.NAME,
      component: FluxoDeCaixaView
    },
    {
      path: '/detalhes-da-venda/:id',
      name: ROUTES.SALE_DETAILS.ROOT.NAME,
      component: DetalhesCompraView
    }
  ]
})

export default router
