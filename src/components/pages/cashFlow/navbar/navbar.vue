<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <v-card class="d-flex ga-3 justify-space-between align-center" elevation="0" color="primary">
    <v-btn icon="mdi-chevron-left" variant="plain" @click="router.back()"></v-btn>

    <h6 class="text-h6">Banca de Vendas</h6>

    <v-btn icon="mdi-cog" variant="plain"></v-btn>
  </v-card>
</template>
