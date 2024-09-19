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
          primary: '#003366', // Azul marinho
          secondary: '#007BB5', // Azul médio
          accent: '#00A3E0', // Azul claro
          error: '#E57373', // Vermelho suave
          info: '#B0BEC5', // Cinza claro
          success: '#4CAF50', // Verde escuro
          warning: '#FFC107' // Amarelo dourado
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
