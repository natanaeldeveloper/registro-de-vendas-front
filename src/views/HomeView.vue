<script setup lang="ts">
import { ref, watch } from 'vue'

const standSelected = ref(null)

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

watch(standSelected, (newValue) => {
  console.log(newValue)
})
</script>

<template>
  <main>
    <v-container>
      <header class="d-flex ga-3 w-100 justify-space-between py-4">
        <div class="d-flex ga-4 align-center">
          <v-avatar color="success">NA</v-avatar>
          <h6 class="text-h6 text-white">Natanael</h6>
        </div>
        <div>
          <v-btn icon="mdi-magnify" variant="plain" color="white"></v-btn>
          <v-btn icon="mdi-bell-outline" variant="plain" color="white"></v-btn>
        </div>
      </header>
      <v-carousel :show-arrows="false" hide-delimiter-background height="300">
        <v-carousel-item v-for="item in standList" :key="item.id">
          <v-card class="rounded-xl" width="100%" height="calc(100% - 50px)" :color="item.color">
            <v-card-text
              class="d-flex flex-column pt-4 align-lg-center justify-center px-10"
              style="height: 100%"
            >
              <div class="d-flex ga-2 mb-2 align-center">
                <v-icon size="26">mdi-store-outline</v-icon>
                <h3 class="">Banca de vendas</h3>
              </div>
              <h1 class="poppins-semibold">{{ item.name }}</h1>
            </v-card-text>
          </v-card>
        </v-carousel-item>
      </v-carousel>
      <v-card color="transparent" elevation="0">
        <v-card-text class="d-flex ga-3 justify-center">
          <div class="d-flex flex-column ga-2">
            <v-btn color="white" variant="tonal" height="60" width="60" class="rounded-lg">
              <v-icon size="30">mdi-handshake-outline</v-icon>
            </v-btn>
            <p style="color: white" class="text-center poppins-light">Vendas</p>
          </div>
          <div class="d-flex flex-column ga-2">
            <v-btn color="white" variant="tonal" height="60" width="60" class="rounded-lg">
              <v-icon size="30">mdi-package-variant-closed</v-icon>
            </v-btn>
            <p style="color: white" class="text-center poppins-light">Produtos</p>
          </div>
          <div class="d-flex flex-column ga-2">
            <v-btn color="white" variant="tonal" height="60" width="60" class="rounded-lg">
              <v-icon size="30">mdi-account-multiple</v-icon>
            </v-btn>
            <p style="color: white" class="text-center poppins-light">Clientes</p>
          </div>
          <div class="d-flex flex-column ga-2">
            <v-btn color="white" variant="tonal" height="60" width="60" class="rounded-lg">
              <v-icon size="30">mdi-chart-box-outline</v-icon>
            </v-btn>
            <p style="color: white" class="text-center poppins-light">Relatório</p>
          </div>
          <div class="d-flex flex-column ga-2">
            <v-btn color="white" variant="tonal" height="60" width="60" class="rounded-lg">
              <v-icon size="30">mdi-plus</v-icon>
            </v-btn>
            <p style="color: white" class="text-center poppins-light">Mais</p>
          </div>
        </v-card-text>
      </v-card>
      <v-card color="transparent" elevation="0">
        <v-card-title>
          <h5 class="text-white">Resumo de vendas</h5>
        </v-card-title>
        <v-card-text>
          <v-slide-group>
            <v-slide-group-item v-for="n in 15" :key="n" v-slot="{ toggle, selectedClass }">
              <v-card
                :class="['ma-4', selectedClass]"
                color="dark01"
                height="200"
                width="70vw"
                max-width="350px"
                @click="toggle"
              >
                <v-card-text class="d-flex flex-column ga-2">
                  <div class="d-flex justify-space-between align-center">
                    <h4 class="text-h6">{{ n <= 9 ? '0'.concat(`${n}`) : n }} de Out</h4>
                    <v-btn size="small" icon="mdi-chevron-right" variant="plain"></v-btn>
                  </div>
                  <div class="d-flex justify-space-between align-center">
                    <h4 class="text-subtitle-2" style="color: #a5a5a5">Ação Social</h4>
                    <div>
                      <v-avatar size="small" color="primary" style="margin-right: -8px; z-index: 2"
                        >NA</v-avatar
                      >
                      <v-avatar size="small" color="success">PA</v-avatar>
                    </div>
                  </div>
                  <div class="d-flex flex-column ga-2 mt-4">
                    <div class="d-flex justify-space-between align-center">
                      <span class="font-weight-semibold" style="font-size: 18px"
                        >Pago R$ 40,00</span
                      >
                      <span style="color: #a5a5a5">Total R$ 75,00</span>
                    </div>
                    <v-progress-linear
                      rounded
                      model-value="40"
                      color="success"
                      height="8"
                    ></v-progress-linear>
                  </div>
                </v-card-text>
              </v-card>
            </v-slide-group-item>
          </v-slide-group>
        </v-card-text>
      </v-card>
    </v-container>
  </main>
</template>

<style lang="scss" scoped>
main {
  background-color: #1d1d1d;
  min-height: 100vh;
}
</style>
