<script setup lang="ts">
import CashFlowSummaryCarousel from './cashFlowSummaryCarousel/cashFlowSummaryCarousel.vue'
import Menu from './menu/menu.vue'
import Navbar from './navbar/navbar.vue'
import StandCarousel from './standCarousel/standCarousel.vue'
</script>

<template>
  <v-card color="background">
    <v-container class="pb-15">
      <Navbar class="mb-3" />
      <StandCarousel />
      <Menu />
      <CashFlowSummaryCarousel />
    </v-container>
  </v-card>
</template>

<style lang="scss" scoped></style>
