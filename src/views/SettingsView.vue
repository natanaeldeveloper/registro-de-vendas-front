<script setup lang="ts">
import { vuetify } from '@/plugins/vuetify'
import router from '@/router'
import { ROUTES } from '@/shared/consts'
import { toggleTheme } from '@/utils/ui'
import { ref } from 'vue'

const currentThemeDark = ref<boolean>(vuetify.theme.current.value.dark)

const redirectBack = () => {
  if (window.history.length > 1) {
    router.back()
  } else {
    router.push({ name: ROUTES.STANDS.ROOT.NAME })
  }
}
</script>

<template>
  <v-container>
    <v-card variant="text" class="mb-2">
      <v-btn icon="mdi-arrow-left" variant="text" @click="redirectBack"></v-btn>
    </v-card>
    <v-card variant="text">
      <v-list density="comfortable">
        <v-list-subheader>Preferências</v-list-subheader>
        <v-list-item link>
          <v-list-item-title>Tema dark</v-list-item-title>
          <v-list-item-subtitle
            >Alteras as cores tema do site entre "light" e "dark"</v-list-item-subtitle
          >
          <template v-slot:append>
            <v-switch
              inset
              v-model="currentThemeDark"
              color="primary"
              @change="toggleTheme()"
            ></v-switch>
          </template>
        </v-list-item>
      </v-list>
    </v-card>
  </v-container>
</template>
