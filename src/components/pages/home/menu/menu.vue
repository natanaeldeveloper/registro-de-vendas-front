<script lang="ts" setup>
import { ref } from 'vue'

const options = ref([
  {
    icon: 'mdi-handshake-outline',
    label: 'Vendas'
  },
  {
    icon: 'mdi-package-variant-closed',
    label: 'Produtos'
  },
  {
    icon: 'mdi-account-multiple',
    label: 'Clientes'
  },
  {
    icon: 'mdi-chart-box-outline',
    label: 'Relatório'
  },
  {
    icon: 'mdi-plus',
    label: 'Mais'
  }
])
</script>

<template>
  <v-card variant="text" elevation="0" class="mx-0">
    <v-card-text class="d-flex justify-center ga-2 overflow-y-auto px-1">
      <div class="d-flex flex-column ga-2" v-for="item in options" :key="item.label">
        <v-btn color="primary" variant="tonal" height="60" width="60" class="rounded-lg">
          <v-icon size="30">{{ item.icon }}</v-icon>
        </v-btn>
        <span class="text-center text-body-2">{{ item.label }}</span>
      </div>
    </v-card-text>
  </v-card>
</template>
