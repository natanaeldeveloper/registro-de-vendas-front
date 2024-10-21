<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <v-card class="d-flex ga-3 justify-space-between align-center" variant="text">
    <v-btn icon="mdi-chevron-left" variant="plain" @click="router.back()"></v-btn>

    <h6 class="text-h6">Detalhes da venda</h6>

    <v-btn icon="mdi-cog" variant="plain"></v-btn>
  </v-card>
</template>
