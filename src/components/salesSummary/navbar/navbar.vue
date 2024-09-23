<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <header class="d-flex ga-3 w-100 justify-space-between align-center">
    <v-btn icon="mdi-chevron-left" variant="plain" color="contrast" @click="router.back()"></v-btn>

    <h6 class="text-h6 text-contrast">Banca de Vendas</h6>

    <v-btn icon="mdi-bell-outline" variant="plain" color="contrast"></v-btn>
  </header>
</template>
