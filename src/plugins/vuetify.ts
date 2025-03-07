// Vuetify
import { sessionStorageService } from '@/services/browserStorage'
import '@mdi/font/css/materialdesignicons.css' // Importar CSS dos ícones MDI
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { VNumberInput } from 'vuetify/labs/components'
import 'vuetify/styles'

const primaryColor = sessionStorageService.getItem('ui-primary-color')
const currentTheme = sessionStorageService.getItem('current-theme')

export const vuetify = createVuetify({
  components: {
    VNumberInput,
    ...components
  },
  directives,
  // locale: {
  //   locale: 'pt', // Define o idioma padrão para Português
  //   fallback: 'en'
  // },
  // date: {
  //   locale: {
  //     pt: 'pt-BR' // Define o formato de data no padrão brasileiro
  //   }
  // },
  theme: {
    defaultTheme: currentTheme ?? 'light', // Define o tema padrão
    themes: {
      light: {
        dark: false,
        colors: {
          background: '#FAFAFA', // Fundo claro neutro
          contrast: '#1C1C1E', // Fundo claro neutro
          contrast02: '#3A3A3C', // Fundo claro neutro
          contrast03: '#EEEEEE', // Fundo claro neutro
          surface: '#FFFFFF', // Superfície branca clássica
          primary: primaryColor ?? '#007AFF', // Azul iOS (equivalente ao botão)
          secondary: '#5856D6', // Roxo suave, típico de Apple
          accent: '#34C759', // Verde de ação
          error: '#FF3B30', // Vermelho de erro
          info: '#5AC8FA', // Azul informativo
          success: '#4CD964', // Verde de sucesso
          warning: '#FFCC00' // Amarelo de alerta
        }
      },
      dark: {
        dark: true,
        colors: {
          background: '#1C1C1E', // Preto com um leve tom de cinza
          contrast: '#F9F9F9', // Fundo claro neutro
          contrast02: '#E0E0E0',
          contrast03: '#212121', // Fundo claro neutro
          surface: '#2C2C2E', // Superfície ligeiramente mais clara
          primary: primaryColor ?? '#0A84FF', // Azul destacado no tema escuro
          secondary: '#5E5CE6', // Roxo vibrante para contraste
          accent: '#30D158', // Verde de ação
          error: '#FF453A', // Vermelho de erro
          info: '#64D2FF', // Azul informativo mais claro
          success: '#32D74B', // Verde de sucesso
          warning: '#FFD60A' // Amarelo para alertas
        }
      }
    }
  }
})
