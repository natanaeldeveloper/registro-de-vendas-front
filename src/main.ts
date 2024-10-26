import './assets/main.scss'

import { createPinia } from 'pinia'
import { createApp } from 'vue'

import App from './App.vue'
import { vuetify } from './plugins/vuetify'
import router from './router'

import './plugins/yup.config'
import { useModalFeedbackStore, useOverlayStore } from './stores'
import VueApexCharts from 'vue3-apexcharts'

const app = createApp(App)

app.use(createPinia())
app.use(vuetify)
app.use(router)
app.use(VueApexCharts)

app.config.globalProperties.$modalFeedback = useModalFeedbackStore()
app.config.globalProperties.$overlay = useOverlayStore()

app.mount('#app')
