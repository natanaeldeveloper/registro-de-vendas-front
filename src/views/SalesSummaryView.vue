<script lang="ts" setup>
import Navbar from '@/components/salesSummary/navbar/navbar.vue'
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const year = ref('2024')
const years = ['2020', '2021', '2022', '2023', '2024']

const month = ref('Agosto')
const months = ['Janeiro', 'Fervereiro', 'Março', 'Abril', 'Maio']

const { params } = useRoute()
const id = params['id']
</script>

<template>
  <v-container>
    <Navbar />
    <div class="d-flex flex-column justify-space-center mt-4">
      <div class="mx-auto">
        <v-menu>
          <template v-slot:activator="{ props }">
            <v-btn size="large" color="contrast" variant="text" v-bind="props">
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
            <v-btn size="large" color="contrast" variant="text" v-bind="props">
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
    <div></div>
  </v-container>
</template>
