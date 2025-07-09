<script setup lang="ts">
import router from '@/router'
import { ROUTES } from '@/shared/consts'
import { ref } from 'vue'

const totalValues = ref([
  {
    label: 'Total Vendido',
    amount: 129.99,
    color: 'primary'
  },
  {
    label: 'Total Recebido',
    amount: 100.99,
    color: 'orange'
  },
  {
    label: 'Lucro Real',
    amount: 56.0,
    color: 'success'
  }
])
</script>

<template>
  <main>
    <v-card style="height: 100%; width: 100%">
      <v-card-title class="d-flex justify-space-between">
        <h2>Tela Inicial</h2>
        <v-btn
          variant="text"
          icon="mdi-cog"
          @click="router.push({ name: ROUTES.CONFIG.ROOT.NAME })"
        ></v-btn>
      </v-card-title>
      <v-card-text>
        <div class="d-flex justify-space-between w-100">
          <h5>Resumo de vendas</h5>
          <span>Última Semana</span>
        </div>
        <div class="d-flex ga-2 w-100 mt-4" style="flex-wrap: wrap row">
          <v-card
            :color="item.color"
            variant="tonal"
            v-for="item in totalValues"
            :key="item.label"
            width="170px"
          >
            <v-card-text>
              <span class="text-subtitle-2">{{ item.label }}</span>
              <h2>R$ {{ item.amount }}</h2>
            </v-card-text>
          </v-card>
        </div>
      </v-card-text>
    </v-card>
  </main>
</template>

<style lang="scss" scoped>
main {
  height: 100vh;
  width: 100vw;
}
</style>
