<script lang="ts" setup>
import { ROUTES } from '@/shared/consts'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const products = ref([
  {
    id: 1,
    name: 'Vestido Ribana Godê Rodado Catarina',
    src: 'https://m.media-amazon.com/images/I/41W2+6KJW2L._AC_SX569_.jpg',
    checked: false
  },
  {
    id: 2,
    name: 'Kit 3 Camisetas Masculina Lisa Premium 100% Algodão',
    src: 'https://m.media-amazon.com/images/I/415n4HSMmrL._AC_SX569_.jpg',
    checked: false
  },
  {
    id: 3,
    name: 'Kit 2 Calças Masculinas Esportivas Slim Fit Preto e Cinza Mescla Calça Comprida',
    src: 'https://m.media-amazon.com/images/I/51rrRZVt8oL._AC_SX569_.jpg',
    checked: false
  },
  {
    id: 4,
    name: 'Tênis Branco Feminino Casual Confortável com Recortes Colorido Original Lóris Shoes 7802',
    src: 'https://m.media-amazon.com/images/I/611XzxmrXML._AC_SY575_.jpg',
    checked: false
  },
  {
    id: 5,
    name: 'Tenis Masculino Academia Corrida Knit Confortavel Ultra Leve Originalk WB',
    src: 'https://m.media-amazon.com/images/I/6169KLGspuL._AC_SY575_.jpg',
    checked: false
  }
])

const formatName = (name: string) => {
  return name.length > 26 ? name.slice(0, 26).trim().concat('..') : name
}
</script>
<template>
  <v-container>
    <v-row>
      <v-col class="px-0 pb-0">
        <v-btn
          icon="mdi-arrow-left"
          variant="text"
          @click="router.push({ name: ROUTES.HOME.NAME })"
        ></v-btn>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <h1 class="text-h5 font-weight-bold">Selecionar produtos</h1>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-autocomplete
          variant="outlined"
          density="comfortable"
          rounded
          append-inner-icon="mdi-magnify"
          menu-icon=""
          hide-no-data
          hide-details="auto"
          placeholder="Pesquisar produto"
          :items="products"
          item-value="id"
          item-title="name"
          clearable
        >
        </v-autocomplete>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <div class="rounded-lg border">
          <div class="d-flex flex-wrap ga-2 overflow-y-auto px-4 py-4" style="max-height: 350px">
            <v-card
              v-for="item in products"
              :key="item.id"
              width="140"
              variant="flat"
              class="rounded-lg"
              color="white"
              border="sm"
              @click="item.checked = !item.checked"
            >
              <div class="position-absolute px-2" style="z-index: 3">
                <v-checkbox v-model="item.checked" density="compact"></v-checkbox>
              </div>
              <v-card-text class="d-flex flex-column align-center ga-2">
                <v-img width="100%" height="70" color="white" :src="item.src"></v-img>
                <span class="text-body-2">{{ formatName(item.name) }}</span>
              </v-card-text>
            </v-card>
            <v-card
              variant="flat"
              width="140"
              class="rounded-lg"
              color="white"
              border="dashed md"
              @click="() => {}"
            >
              <v-card-text
                class="d-flex flex-column align-center justify-center text-center ga-2 h-100"
              >
                <v-icon size="35">mdi-plus</v-icon>
                <span class="text-body-2">Registrar novo Produto</span>
              </v-card-text>
            </v-card>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
