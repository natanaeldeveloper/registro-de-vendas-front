<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { useTheme } from 'vuetify'

const showSearch = ref(false)

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
</script>

<template>
  <header class="d-flex ga-3 w-100 justify-space-between align-center">
    <div class="d-flex ga-4 align-center" v-if="!showSearch">
      <v-avatar>
        <v-img
          alt="Natanael Oliveira"
          src="https://avatars.githubusercontent.com/u/51293075?v=4"
        ></v-img>
      </v-avatar>
      <h6 class="text-h6">Natanael</h6>
    </div>
    <v-text-field
      v-if="showSearch"
      ref="input-search"
      :autofocus="true"
      hide-details
      density="compact"
      variant="outlined"
      color="primary"
      prepend-inner-icon="mdi-magnify"
      @click:clear="showSearch = false"
      clearable
      rounded="xl"
    />

    <div class="d-flex align-center">
      <v-btn
        v-if="!showSearch"
        icon="mdi-magnify"
        variant="text"
        color="primary"
        @click="showSearch = true"
      ></v-btn>
      <v-btn icon="mdi-bell-outline" variant="text" color="primary"></v-btn>
      <v-switch
        @change="toggleTheme"
        hide-details
        inset
        density="compact"
        color="primary"
        base-color="primary"
        class="ml-2"
        prepend-icon="mdi-theme-light-dark"
      >
      </v-switch>
    </div>
  </header>
</template>
