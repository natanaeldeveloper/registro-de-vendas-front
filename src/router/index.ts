import { ROUTES } from '@/shared/consts'
import HomeView from '@/views/HomeView.vue'
import OpenNewCashierView from '@/views/OpenNewCashierView.vue'
import SettingsView from '@/views/SettingsView.vue'
import StandDetailsView from '@/views/StandDetailsView.vue'
import StandView from '@/views/StandView.vue'
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
      path: '/bancas',
      name: ROUTES.STANDS.ROOT.NAME,
      component: StandView
    },
    {
      path: '/bancas/:id',
      name: ROUTES.STANDS.DETAILS.NAME,
      component: StandDetailsView
    },
    {
      path: '/caixa/novo',
      name: ROUTES.CASHIER.CREATE.NAME,
      component: OpenNewCashierView
    },
    {
      path: '/config',
      name: ROUTES.CONFIG.ROOT.NAME,
      component: SettingsView
    }
  ]
})

export default router
