// Vuetify
import '@mdi/font/css/materialdesignicons.css' // Importar CSS dos ícones MDI
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'dark',

    themes: {
      light: {
        colors: {
          primary: '#9529FF', // Azul marinho
          secondary: '#4CC9F0', // Azul médio
          accent: '#00A3E0', // Azul claro
          error: '#B8001C', // Vermelho suave
          info: '#4CC9F0', // Cinza claro
          success: '#8EDF34', // Verde escuro
          warning: '#FFC719', // Amarelo dourado
          background: '#F2F2F2',
          contrast: '#1D1D1D',
          contrast02: 'grey'
        }
      },
      dark: {
        colors: {
          primary: '#9529FF', // Azul escuro quase preto
          secondary: '#4CC9F0', // Azul marinho
          accent: '#00A3E0', // Azul claro
          error: '#B8001C', // Vermelho suave
          info: '#4CC9F0', // Cinza médio
          success: '#8EDF34', // Verde oliva claro
          warning: '#FFC719', // Laranja queimado
          background: '#131313',
          contrast: 'grey',
          contrast02: 'black'
        }
      }
    }
  }
})
