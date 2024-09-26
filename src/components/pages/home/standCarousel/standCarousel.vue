<script setup lang="ts">
import { ref } from 'vue'

const standList = ref([
  {
    id: 1,
    color: '#007AFF',
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
  <v-carousel :show-arrows="false" hide-delimiter-background height="230" class="rounded-lg">
    <v-carousel-item v-for="item in standList" :key="item.id" :color="item.color">
      <v-card variant="text" height="100%">
        <v-card-text class="d-flex flex-column align-lg-center justify-center" style="height: 100%">
          <v-container>
            <div class="d-flex ga-2 mb-2 align-center">
              <v-icon size="30">mdi-store-outline</v-icon>
              <span class="text-subtitle-1">Banca de vendas</span>
            </div>
            <h5 class="text-h5">{{ item.name }}</h5>
          </v-container>
        </v-card-text>
      </v-card>
    </v-carousel-item>
  </v-carousel>
</template>
