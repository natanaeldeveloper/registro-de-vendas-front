import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SalesSummaryView from '@/views/SalesSummaryView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/resumo-vendas/:id',
      name: 'resumoVendas',
      component: SalesSummaryView
    }
  ]
})

export default router
