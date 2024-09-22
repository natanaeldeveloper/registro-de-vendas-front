<script setup lang="ts">
import Menu from '@/components/home/menu/menu.vue'
import Navbar from '@/components/home/navbar/navbar.vue'
import SalesSumarryCard from '@/components/home/salesSummaryCard/salesSumarryCard.vue'
import StandCarrousel from '@/components/home/standCarrousel/standCarrousel.vue'
import { ref, watch } from 'vue'

const standSelected = ref(null)

watch(standSelected, (newValue) => {
  console.log(newValue)
})
</script>

<template>
  <v-card color="background">
    <v-container>
      <Navbar class="mb-4" />
      <StandCarrousel />
      <Menu />
      <h5 class="text-subtitle-1 text-contrast my-4">Resumo de vendas</h5>
      <SalesSumarryCard />
    </v-container>
  </v-card>
</template>

<style lang="scss" scoped></style>
