<script setup lang="ts">
import Menu from '@/components/home/menu/menu.vue'
import Navbar from '@/components/home/navbar/navbar.vue'
import SalesSumarryCard from '@/components/home/salesSummaryCard/salesSumarryCard.vue'
import StandCarrousel from '@/components/home/standCarrousel/standCarrousel.vue'
</script>

<template>
  <v-card color="background">
    <v-container class="pb-15">
      <Navbar class="mb-3" />
      <StandCarrousel />
      <Menu />
      <SalesSumarryCard />
    </v-container>
  </v-card>
</template>

<style lang="scss" scoped></style>
