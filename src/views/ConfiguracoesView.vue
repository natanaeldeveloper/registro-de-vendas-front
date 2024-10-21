<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useTheme } from 'vuetify'

const items = [
  { text: 'Real-Time', icon: 'mdi-clock' },
  { text: 'Audience', icon: 'mdi-account' },
  { text: 'Conversions', icon: 'mdi-flag' }
]
const theme = useTheme() // Use a função para acessar o tema do Vuetify

// Função para alternar temas
const toggleTheme = () => {
  const newTheme = theme.global.name.value === 'light' ? 'dark' : 'light'
  theme.global.name.value = newTheme
  localStorage.setItem('preferredTheme', newTheme)
}

// Restaura a preferência do tema
onMounted(() => {
  const savedTheme = localStorage.getItem('preferredTheme')
  if (savedTheme) {
    theme.global.name.value = savedTheme
  }
})

const router = useRouter()
</script>

<template>
  <v-card variant="text">
    <v-btn icon="mdi-chevron-left" variant="plain" @click="router.back()"></v-btn>
  </v-card>
  <v-list variant="text" lines="three" bg-color="background">
    <v-list-subheader> Configurações </v-list-subheader>

    <v-list-item color="primary" value="theme">
      <template v-slot:prepend>
        <v-icon>mdi-theme-light-dark</v-icon>
      </template>

      <v-list-item-title>Mudar tema</v-list-item-title>
      <v-list-item-subtitle
        >Atualize o tema do site de acordo com a preferência</v-list-item-subtitle
      >

      <template v-slot:append>
        <v-switch
          @change="toggleTheme"
          hide-details
          inset
          density="compact"
          color="primary"
          class="ml-2"
        >
        </v-switch>
      </template>
    </v-list-item>
  </v-list>
</template>
