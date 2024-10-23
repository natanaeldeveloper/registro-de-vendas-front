<script lang="ts" setup>
import { ROUTES } from '@/shared/consts'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const indicators = ref([
  {
    id: 1,
    name: 'Efetuados',
    value: 60,

    color: 'success'
  },
  {
    id: 2,
    name: 'Pendentes',
    value: 20,
    color: 'warning'
  },
  {
    id: 3,
    name: 'Isentos',
    value: 20,
    color: 'grey'
  }
])

const links = ref([
  {
    href: '',
    label: 'Clientes'
  },
  {
    href: '',
    label: 'Produtos'
  },
  {
    href: '',
    label: 'Relatórios'
  },
  {
    href: '',
    label: 'Cardápio do dia'
  }
])
</script>

<template>
  <!-- HEADER -->
  <v-card color="primary" variant="flat" class="rounded-0">
    <v-card-text>
      <div variant="text" class="d-flex justify-space-between">
        <v-btn
          icon="mdi-arrow-left"
          variant="text"
          @click="router.push({ name: ROUTES.STANDS.ROOT.NAME })"
        ></v-btn>
        <v-btn
          variant="text"
          icon="mdi-cog"
          @click="router.push({ name: ROUTES.CONFIG.ROOT.NAME })"
        ></v-btn>
      </div>
      <div class="d-flex justify-space-between align-center mt-4">
        <v-icon size="35">mdi-store</v-icon>
        <v-btn
          append-icon="mdi-arrow-right
"
          variant="text"
          class="text-capitalize"
          >Editar</v-btn
        >
      </div>
      <h1 class="text-h5 py-4">Banca de Cachorro quente</h1>
    </v-card-text>
  </v-card>
  <!-- HEADER FIM -->

  <!-- DETALHES DO CAIXA  -->
  <v-card variant="text">
    <v-card-text>
      <h3 class="text-subtitle-1 text-grey">Caixa aberto</h3>
      <div class="d-flex justify-space-between align-center mt-2">
        <h1 class="text-h5">Hoje</h1>
        <v-btn
          append-icon="mdi-arrow-right
"
          variant="text"
          color="primary"
          class="text-capitalize"
          >Mais Detalhes</v-btn
        >
      </div>
      <div class="mt-4 d-flex justify-space-between">
        <h4 class="text-h6">Total faturado</h4>
        <h4 class="text-subtitle-1 text-grey">Feira do bairro</h4>
      </div>
      <div>
        <h1>R$ 30,00</h1>
      </div>
      <div class="d-flex ga-2 w-100 mt-2">
        <v-card
          variant="flat"
          class="indicator-bar"
          v-for="i in indicators"
          :key="i.id"
          :color="i.color"
          :style="[{ width: `${i.value}%` }]"
        ></v-card>
      </div>
      <div class="d-flex ga-8 mt-2">
        <v-card v-for="i in indicators" :key="i.id" variant="text" :color="i.color">
          <h6 class="text-subtitle-1 font-weight-bold">{{ i.name }}</h6>
          <span class="text-subtitle-1 text-contrast">R$ {{ i.value.toFixed(2) }}</span>
        </v-card>
      </div>
      <div class="mt-4">
        <v-btn
          prepend-icon="mdi-plus"
          class="text-capitalize"
          color="primary"
          variant="outlined"
          @click="router.push({ name: ROUTES.CASHIER.CREATE.NAME })"
          >Abrir novo caixa</v-btn
        >
      </div>
    </v-card-text>
  </v-card>
  <!-- DETALHES DO CAIXA FIM -->

  <!-- LISTA DE CAIXAS -->
  <v-card variant="text">
    <v-card-text>
      <div class="d-flex justify-space-between align-center">
        <h1 class="text-subtitle-1 text-grey">Histórico de caixas</h1>
        <v-btn
          append-icon="mdi-arrow-right
"
          variant="text"
          color="primary"
          class="text-capitalize"
          >Ver tudo</v-btn
        >
      </div>
      <v-card class="overflow-x-auto d-flex ga-4 pt-2 pb-4" variant="text">
        <v-card
          v-for="n in 10"
          :key="n"
          min-width="300"
          class="rounded-xl"
          variant="flat"
          color="background"
          @click="null"
        >
          <v-card-text class="px-5">
            <div class="d-flex justify-space-between align-center text-subtitle-1 text-grey">
              <span>25 Out 2024</span>
              <div>
                <span>Feira do bai...</span>
                <v-icon class="ml-2">mdi-chevron-right</v-icon>
              </div>
            </div>
            <div class="mt-4">
              <h6 class="text-subtitle-1">Total em vendas</h6>
              <span class="text-h6">R$ 30,00</span>
            </div>
            <div class="d-flex ga-4 text-subtitle-1 mt-4">
              <div class="d-flex flex-column">
                <span class="text-success font-weight-bold">Efetuados</span>
                <span>R$ 20,00</span>
              </div>
              <div class="d-flex flex-column">
                <span class="text-warning font-weight-bold">Pendentes</span>
                <span>R$ 20,00</span>
              </div>
              <div class="d-flex flex-column">
                <span class="text-grey font-weight-bold">Isentos</span>
                <span>R$ 0,00</span>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-card>
    </v-card-text>
  </v-card>
  <!-- LISTA DE CAIXAS FIM -->

  <!-- LINKS AUXILIARES -->
  <v-card class="mx-2 mt-0" variant="text">
    <v-card-text class="d-flex flex-column ga-2 pt-0">
      <v-card
        v-for="link in links"
        :key="link.label"
        @click="null"
        variant="flat"
        color="background"
      >
        <v-card-text class="d-flex justify-space-between align-center py-4">
          <span class="text-subtitle-1">{{ link.label }}</span>
          <v-icon>mdi-chevron-right</v-icon>
        </v-card-text>
      </v-card>
    </v-card-text>
  </v-card>
  <!-- LINKS AUXILIARES FIM -->
</template>

<style scoped>
.indicator-bar {
  height: 8px;
}
</style>
