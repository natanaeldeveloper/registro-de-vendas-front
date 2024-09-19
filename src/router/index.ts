import BuyerListView from '@/views/buyer/BuyerListView.vue'
import BuyerRegisterView from '@/views/buyer/BuyerRegisterView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: 'clientes',
          component: BuyerListView
        },
        {
          path: 'clientes/novo',
          component: BuyerRegisterView
        }
      ]
    }
  ]
})

export default router
