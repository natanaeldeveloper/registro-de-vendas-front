<script setup lang="ts">
import { ref } from 'vue'

const estoque = ref([
  {
    product: 'Tapioca',
    total: 9,
    count: 2
  },
  {
    product: 'Cachorro Quente',
    total: 12,
    count: 4
  },
  {
    product: 'Patel',
    total: 24,
    count: 15
  },
  {
    product: 'Quentinha',
    total: 5,
    count: 3
  }
])
</script>

<template>
  <v-expansion-panels class="mt-4" color="background" elevation="0">
    <v-expansion-panel>
      <v-expansion-panel-title>Estoque de produtos</v-expansion-panel-title>
      <v-expansion-panel-text>
        <v-card variant="text" v-for="n in estoque" :key="n.product">
          <v-card-text class="d-flex flex-column ga-2 pt-3 px-0 py-2">
            <div>
              <v-icon>mdi-food</v-icon>
            </div>
            <!-- <span class="text-body-2">{{ n.product }}</span> -->
            <div class="d-flex ga-2 justify-space-between align-center">
              <div class="w-100">
                <v-progress-linear
                  color="success"
                  height="5"
                  :max="n.total"
                  :model-value="n.count"
                  rounded
                ></v-progress-linear>
              </div>

              <div class="text-subtitle-1">
                <span class="font-weight-bold">{{ n.count }}</span
                >/{{ n.total }}
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>
