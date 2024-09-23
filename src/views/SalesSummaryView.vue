<script lang="ts" setup>
import Navbar from '@/components/salesSummary/navbar/navbar.vue'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useDate } from 'vuetify'

const year = ref('2024')
const years = ['2020', '2021', '2022', '2023', '2024']

const month = ref('Agosto')
const months = ['Janeiro', 'Fervereiro', 'Março', 'Abril', 'Maio']

const { params } = useRoute()
const id = params['id']

const day = ref<null | number>(null)

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

const items = ref(['Pós EBD', 'Culto a noite', 'Evento com muitas palavras para teste'])
const sumarry = ref<null | string>(items.value[0])
</script>

<template>
  <header class="bg-contrast02">
    <v-container>
      <Navbar />
      <div class="d-flex flex-column justify-space-center mt-1">
        <div class="mx-auto">
          <v-menu>
            <template v-slot:activator="{ props }">
              <v-btn
                size="large"
                color="contrast"
                variant="text"
                v-bind="props"
                class="font-weight-bold"
              >
                {{ year }}
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="(item, index) in years"
                :key="index"
                :value="item"
                @click="year = item"
              >
                <v-list-item-title class="text-center">{{ item }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
        <div class="mx-auto">
          <v-menu>
            <template v-slot:activator="{ props }">
              <v-btn
                size="large"
                color="contrast"
                variant="text"
                v-bind="props"
                class="font-weight-bold"
              >
                {{ month }}
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="(item, index) in months"
                :key="index"
                :value="item"
                @click="month = item"
              >
                <v-list-item-title class="text-center">{{ item }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </div>
      <v-slide-group class="mt-2">
        <v-slide-item v-for="item in 20" :key="item">
          <v-card color="transparent" class="mx-0 my-1" @click="day = item" elevation="0">
            <v-card-text>
              <div class="d-flex flex-column ga-2 align-center">
                <span class="font-weight-bold text-subtitle-2">DOM</span>
                <v-chip
                  color="contrast"
                  :variant="day === item ? `elevated` : `text`"
                  class="font-weight-bold text-background"
                  >{{ item }}</v-chip
                >
              </div>
            </v-card-text>
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-container>
  </header>
  <v-container>
    <div class="d-flex ga-2 justify-space-between align-center my-5">
      <h2 class="text-subtitle-1 text-contrast">Resultado das vendas</h2>
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
        class="bg-success rounded-sm"
        :style="`width: ${(salesSummary.values.paid / salesSummary.values.total) * 100}%; height: 15px`"
      ></div>
      <div
        class="bg-warning rounded-sm"
        :style="`width: ${(salesSummary.values.pending / salesSummary.values.total) * 100}%; height: 15px`"
      ></div>
    </div>
    <div class="d-flex justify-space-between align-center ga-3">
      <div class="d-flex align-center ga-2">
        <div class="bg-success rounded-sm" style="width: 10px; height: 10px"></div>
        <span class="text-subtitle-1">Pago</span>
      </div>
      <span class="text-subtitle-1 font-weight-bold"
        >R${{ salesSummary.values.paid.toFixed(2) }}</span
      >
    </div>
    <div class="d-flex justify-space-between align-center ga-3">
      <div class="d-flex align-center ga-2">
        <div class="bg-warning rounded-sm" style="width: 10px; height: 10px"></div>
        <span class="text-subtitle-1">Pendente</span>
      </div>
      <span class="text-subtitle-1 font-weight-bold"
        >R${{ salesSummary.values.pending.toFixed(2) }}</span
      >
    </div>
    <div class="d-flex justify-space-between align-center ga-3">
      <div class="d-flex align-center ga-2">
        <div class="bg-grey rounded-sm" style="width: 10px; height: 10px"></div>
        <span class="text-subtitle-1">Total previsto</span>
      </div>
      <span class="text-subtitle-1 font-weight-bold"
        >R${{ salesSummary.values.total.toFixed(2) }}</span
      >
    </div>
  </v-container>
  <v-container class="d-flex flex-column ga-2">
    <v-card v-for="item in 14" :key="item" elevation="0" color="contrast02">
      <v-card-text class="d-flex justify-space-between align-center">
        <div class="d-flex ga-2 align-center">
          <v-avatar>C{{ item }}</v-avatar>
          <span class="text-subtitle-1">Cliente {{ item <= 9 ? `0${item}` : item }}</span>
        </div>
        <div class="d-flex flex-column align-end">
          <span class="text-caption text-success" v-if="item % 2 === 0"
            >R$ 2.00 <v-icon size="12">mdi-arrow-up</v-icon></span
          >
          <span class="text-caption text-warning" v-else
            >R$ 1.00 <v-icon size="12">mdi-clock-time-ten-outline</v-icon></span
          >
          <span class="text-subtitle-1 font-weight-bold">R$ 233.00</span>
        </div>
      </v-card-text>
    </v-card>
  </v-container>
</template>
