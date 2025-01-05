import { ROUTES } from '@/shared/consts'
import OpenNewCashierView from '@/views/client/OpenNewCashierView.vue'
import SettingsView from '@/views/SettingsView.vue'
import StandDetailsView from '@/views/client/StandShowView.vue'
import StandView from '@/views/client/StandListView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: ROUTES.HOME.NAME,
      redirect: '/bancas'
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
      path: '/bancas/:id/caixa/novo',
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
