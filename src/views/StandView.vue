<script lang="ts" setup>
import { ROUTES } from '@/shared/consts'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const tab = ref(null)
const stands = ref([
  {
    id: 1,
    name: 'Banca de Cachorro-quente',
    color: '#007AFF'
  },
  {
    id: 2,
    name: 'Banca de Tapioca',
    color: '#4CD964'
  },
  {
    id: 3,
    name: 'Banca de Pastel',
    color: '#FFCC00'
  }
])
</script>

<template>
  <v-container class="pb-10">
    <v-card variant="text" class="d-flex justify-space-between">
      <v-avatar size="55"
        ><v-img src="https://avatars.githubusercontent.com/u/51293075?v=4"
      /></v-avatar>
      <router-link :to="{ name: ROUTES.CONFIG.ROOT.NAME }"
        ><v-btn variant="text" icon="mdi-cog" color="contrast"></v-btn
      ></router-link>
    </v-card>
    <v-card class="mt-5" variant="text">
      <v-tabs color="primary" v-model="tab">
        <v-tab>Minhas bancas</v-tab>
        <v-tab>Compartilhadas comigo</v-tab>
      </v-tabs>
      <v-tabs-window v-model="tab">
        <v-tabs-window-item>
          <v-card
            class="my-4 rounded-lg"
            v-for="n in stands"
            :key="n.id"
            @click="router.push({ name: ROUTES.STANDS.DETAILS.NAME, params: { id: n.id } })"
            :color="n.color"
          >
            <v-card-title class="text-right pb-0 pt-2"
              ><v-icon size="20">mdi-chevron-right</v-icon></v-card-title
            >
            <v-card-text class="pb-10 pt-0 px-6">
              <h1 class="text-h6">{{ n.name }}</h1>
            </v-card-text>
          </v-card>
          <v-card class="my-4 rounded-lg" variant="outlined" @click="null">
            <v-card-text class="py-6 d-flex justify-center"
              ><v-icon size="40">mdi-plus</v-icon></v-card-text
            >
          </v-card>
        </v-tabs-window-item>
        <v-tabs-window-item></v-tabs-window-item>
      </v-tabs-window>
    </v-card>
  </v-container>
</template>
