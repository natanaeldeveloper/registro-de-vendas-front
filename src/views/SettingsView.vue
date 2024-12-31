<script setup lang="ts">
import router from '@/router'
import { ROUTES } from '@/shared/consts'
import { useTheme } from 'vuetify'

const theme = useTheme()

const toggleTheme = () => {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>

<template>
  <v-container>
    <v-card variant="text" class="mb-2">
      <v-btn
        icon="mdi-arrow-left"
        variant="text"
        @click="router.push({ name: ROUTES.HOME.NAME })"
      ></v-btn>
    </v-card>
    <v-card variant="text">
      <v-list density="comfortable">
        <v-list-subheader>Preferências</v-list-subheader>
        <v-list-item link>
          <v-list-item-title>Cor tema</v-list-item-title>
          <v-list-item-subtitle
            >Alteras as cores tema do site entre "light" e "dark"</v-list-item-subtitle
          >
          <template v-slot:append>
            <v-switch inset color="primary" @change="toggleTheme"></v-switch>
          </template>
        </v-list-item>
      </v-list>
    </v-card>
  </v-container>
</template>
