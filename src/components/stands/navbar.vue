<script lang="ts" setup>
import { ROUTES } from '@/shared/consts'
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <v-card variant="text" class="d-flex justify-space-between">
    <v-btn
      icon="mdi-arrow-left"
      color="contrast"
      variant="text"
      @click="router.push({ name: ROUTES.STANDS.ROOT.NAME })"
    ></v-btn>
    <router-link :to="{ name: ROUTES.CONFIG.ROOT.NAME }"
      ><v-btn variant="text" icon="mdi-cog" color="contrast"></v-btn
    ></router-link>
  </v-card>
</template>
