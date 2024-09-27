<script setup lang="ts">
import CashFlowSummaryCarousel from './cashFlowSummaryCarousel/cashFlowSummaryCarousel.vue'
import Menu from './menu/menu.vue'
import Navbar from './navbar/navbar.vue'
import StandCarousel from './standCarousel/standCarousel.vue'
</script>

<template>
  <v-container>
    <Navbar class="mb-3" />
    <StandCarousel />
    <Menu />
    <CashFlowSummaryCarousel />
  </v-container>
</template>

<style lang="scss" scoped></style>
