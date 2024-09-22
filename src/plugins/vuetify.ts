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
    defaultTheme: 'light',

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
          dark01: '#1D1D1D'
        }
      },
      dark: {
        colors: {
          primary: '#001F3F', // Azul escuro quase preto
          secondary: '#003366', // Azul marinho
          accent: '#0099CC', // Azul claro
          error: '#E57373', // Vermelho suave
          info: '#90A4AE', // Cinza médio
          success: '#66BB6A', // Verde oliva claro
          warning: '#FFB74D' // Laranja queimado
        }
      }
    }
  }
})
