import { vuetify } from '@/plugins/vuetify'

export const updateColorTheme = (color: string | undefined) => {
  if (!color) {
    sessionStorage.removeItem('ui-primary-color')
    vuetify.theme.themes.value.light.colors.primary = '#007AFF'
    vuetify.theme.themes.value.dark.colors.primary = '#0A84FF'
    return
  }

  sessionStorage.setItem('ui-primary-color', color)
  vuetify.theme.themes.value.light.colors.primary = color
  vuetify.theme.themes.value.dark.colors.primary = color
}
