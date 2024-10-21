// Vuetify
import '@mdi/font/css/materialdesignicons.css' // Importar CSS dos ícones MDI
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles'

export const vuetify = createVuetify({
  components,
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
    defaultTheme: 'dark', // Define o tema padrão
    themes: {
      light: {
        dark: false,
        colors: {
          background: '#F9F9F9', // Fundo claro neutro
          contrast: '#1C1C1E', // Fundo claro neutro
          contrast02: '#3A3A3C', // Fundo claro neutro
          surface: '#FFFFFF', // Superfície branca clássica
          primary: '#007AFF', // Azul iOS (equivalente ao botão)
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
          surface: '#2C2C2E', // Superfície ligeiramente mais clara
          primary: '#0A84FF', // Azul destacado no tema escuro
          secondary: '#5E5CE6', // Roxo vibrante para contraste
          accent: '#30D158', // Verde de ação
          error: '#FF453A', // Vermelho de erro
          info: '#64D2FF', // Azul informativo mais claro
          success: '#32D74B', // Verde de sucesso
          warning: '#FFD60A' // Amarelo para alertas
        }
      },
      purpleDark: {
        dark: true,
        colors: {
          background: '#1C1C1E', // Preto com um leve tom de cinza
          contrast: '#F9F9F9', // Fundo claro neutro
          contrast02: '#E0E0E0',
          surface: '#2C2C2E', // Superfície ligeiramente mais clara
          primary: '#820AD1', // Violeta destacado no tema escuro
          secondary: '#5E5CE6', // Roxo vibrante para contraste
          accent: '#30D158', // Verde de ação
          error: '#FF453A', // Vermelho de erro
          info: '#64D2FF', // Azul informativo mais claro
          success: '#32D74B', // Verde de sucesso
          warning: '#FFD60A' // Amarelo para alertas
        }
      },
      purpleLight: {
        dark: false,
        colors: {
          background: '#F9F9F9', // Fundo claro neutro
          contrast: '#1C1C1E', // Fundo claro neutro
          contrast02: '#3A3A3C', // Fundo claro neutro
          surface: '#FFFFFF', // Superfície branca clássica
          primary: '#820AD1', // Violeta destacado no tema escuro
          secondary: '#5856D6', // Roxo suave, típico de Apple
          accent: '#34C759', // Verde de ação
          error: '#FF3B30', // Vermelho de erro
          info: '#5AC8FA', // Azul informativo
          success: '#4CD964', // Verde de sucesso
          warning: '#FFCC00' // Amarelo de alerta
        }
      }
    }
  }
})
