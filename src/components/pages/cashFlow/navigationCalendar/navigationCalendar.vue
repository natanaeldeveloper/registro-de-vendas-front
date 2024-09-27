<script setup lang="ts">
import { ref } from 'vue'

const year = ref('2024')
const years = ['2020', '2021', '2022', '2023', '2024']

const month = ref('Agosto')
const months = ['Janeiro', 'Fervereiro', 'Março', 'Abril', 'Maio']

const day = ref<null | number>(null)
</script>
<template>
  <v-card color="primary" elevation="0">
    <div class="d-flex flex-column justify-space-center mt-1">
      <div class="mx-auto">
        <v-menu>
          <template v-slot:activator="{ props }">
            <v-btn size="large" variant="text" v-bind="props" class="font-weight-bold">
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
            <v-btn size="large" variant="text" v-bind="props" class="font-weight-bold">
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
      <v-slide-group-item v-for="item in 20" :key="item">
        <v-card variant="text" class="mx-0 my-1" @click="day = item">
          <v-card-text>
            <div class="d-flex flex-column ga-2 align-center">
              <span class="font-weight-bold text-subtitle-2">DOM</span>
              <div class="d-flex flex-column align-center">
                <v-chip class="font-weight-bold" :variant="day == item ? 'tonal' : 'text'">{{
                  item
                }}</v-chip>
                <span class="text-h6">.</span>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-slide-group-item>
    </v-slide-group>
  </v-card>
</template>
