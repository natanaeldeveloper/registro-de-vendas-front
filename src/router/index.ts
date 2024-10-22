import { ROUTES } from '@/shared/consts'
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
      component: StandView
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
      path: '/config',
      name: ROUTES.CONFIG.ROOT.NAME,
      component: SettingsView
    }
  ]
})

export default router
