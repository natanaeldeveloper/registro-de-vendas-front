import './assets/main.scss'

import { createPinia } from 'pinia'
import { createApp } from 'vue'

import App from './App.vue'
import { vuetify } from './plugins/vuetify'
import router from './router'

import './plugins/yup.config'
import { useModalFeedbackStore } from './stores/modalFeedback'
import { useOverlayStore } from './stores/overlay'

const app = createApp(App)

app.use(createPinia())
app.use(vuetify)
app.use(router)

app.config.globalProperties.$modalFeedback = useModalFeedbackStore()
app.config.globalProperties.$overlay = useOverlayStore()

app.mount('#app')
