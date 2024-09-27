<script setup lang="ts">
import { ref } from 'vue'
import { useDate } from 'vuetify'

const currentDate = new Date()
const vDate = useDate()

const salesSummary = ref({
  id: 1,
  name: 'Congresso - Manhã',
  date: new Date(),
  values: {
    paid: 40,
    pending: 60,
    total: 100
  }
})

const items = ref(['Manhã', 'Noite'])
const sumarry = ref<null | string>(items.value[0])
</script>

<template>
  <div class="d-flex ga-2 justify-space-between align-center my-5">
    <h2 class="text-subtitle-1 text-contrast02">Fluxo de caixa</h2>
    <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn size="small" color="contrast" variant="outlined" v-bind="props">
          {{ sumarry && sumarry?.length > 10 ? sumarry?.slice(0, 10)?.concat('...') : sumarry }}
          <v-icon>mdi-menu-down</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          :value="item"
          @click="sumarry = item"
        >
          <v-list-item-title class="text-right">{{ item }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
  <div>
    <h1 class="text-h5 mt-2">{{ vDate.format(currentDate, 'fullDate') }}</h1>
  </div>
  <div class="w-100 d-flex ga-1 my-2">
    <div
      class="bg-success rounded-xl"
      :style="`width: ${(salesSummary.values.paid / salesSummary.values.total) * 100}%; height: 10px`"
    ></div>
    <div
      class="bg-warning rounded-xl"
      :style="`width: ${(salesSummary.values.pending / salesSummary.values.total) * 100}%; height: 10px`"
    ></div>
  </div>
  <div class="d-flex justify-space-between align-center ga-3">
    <div class="d-flex align-center ga-2">
      <div class="bg-success rounded-xl" style="width: 10px; height: 10px"></div>
      <span class="text-subtitle-1">Pago</span>
    </div>
    <span class="text-subtitle-1">R${{ salesSummary.values.paid.toFixed(2) }}</span>
  </div>
  <div class="d-flex justify-space-between align-center ga-3">
    <div class="d-flex align-center ga-2">
      <div class="bg-warning rounded-xl" style="width: 10px; height: 10px"></div>
      <span class="text-subtitle-1">Pendente</span>
    </div>
    <span class="text-subtitle-1">R${{ salesSummary.values.pending.toFixed(2) }}</span>
  </div>
  <div class="d-flex justify-space-between align-center ga-3">
    <div class="d-flex align-center ga-2">
      <div class="bg-grey rounded-xl" style="width: 10px; height: 10px"></div>
      <span class="text-subtitle-1">Total previsto</span>
    </div>
    <span class="text-subtitle-1">R${{ salesSummary.values.total.toFixed(2) }}</span>
  </div>
</template>
