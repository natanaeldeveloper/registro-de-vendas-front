import { vuetify } from '@/plugins/vuetify'
import { sessionStorageService } from '@/services/browserStorage'

export const updateColorTheme = (color: string | undefined) => {
  if (!color) {
    sessionStorageService.removeItem('ui-primary-color')
    vuetify.theme.themes.value.light.colors.primary = '#007AFF'
    vuetify.theme.themes.value.dark.colors.primary = '#0A84FF'
    return
  }

  sessionStorageService.setItem('ui-primary-color', color)
  vuetify.theme.themes.value.light.colors.primary = color
  vuetify.theme.themes.value.dark.colors.primary = color
}

export const toggleTheme = (theme?: 'dark' | 'light') => {
  const newTheme = theme ?? (vuetify.theme.global.current.value.dark ? 'light' : 'dark')
  vuetify.theme.global.name.value = newTheme
  sessionStorageService.setItem('current-theme', newTheme)
}
