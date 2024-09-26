<script lang="ts" setup>
import { ref } from 'vue'
import CashClosing from './cashClosing/cashClosing.vue'
import Navbar from './navbar/navbar.vue'
import NavigationCalendar from './navigationCalendar/navigationCalendar.vue'
import ProductStockSummary from './productStockSummary/productStockSummary.vue'
import SalesSummary from './salesSummary/salesSummary.vue'
</script>

<template>
  <v-container class="rounded-b-xl bg-primary">
    <Navbar />
    <NavigationCalendar />
  </v-container>
  <v-container>
    <CashClosing />
    <ProductStockSummary />
    <SalesSummary />
  </v-container>
</template>

<style scoped></style>
