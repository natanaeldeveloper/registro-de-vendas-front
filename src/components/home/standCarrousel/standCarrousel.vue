<script setup lang="ts">
import { ref } from 'vue'

const standList = ref([
  {
    id: 1,
    color: '#9529FF',
    name: 'Banca de cachorro quente'
  },
  {
    id: 2,
    color: '#FB8500',

    name: 'Venda tapiocas EBD'
  },
  {
    id: 3,
    color: '#8EDF34',
    name: 'Venda de pastel Min. Mulheres'
  }
])
</script>

<template>
  <v-carousel :show-arrows="false" hide-delimiter-background height="300" color="contrast">
    <v-carousel-item v-for="item in standList" :key="item.id" class="px-1">
      <v-card
        elevation="0"
        class="rounded-xl"
        width="100%"
        height="calc(100% - 50px)"
        :color="item.color"
      >
        <v-card-text class="d-flex flex-column align-lg-center justify-center" style="height: 100%">
          <v-container>
            <div class="d-flex ga-2 mb-2 align-center">
              <v-icon size="30">mdi-store-outline</v-icon>
              <span class="text-subtitle-1">Banca de vendas</span>
            </div>
            <span class="text-h5">{{ item.name }}</span>
          </v-container>
        </v-card-text>
      </v-card>
    </v-carousel-item>
  </v-carousel>
</template>
