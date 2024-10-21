<script setup lang="ts">
import Navbar from './navbar/navbar.vue'
</script>

<template>
  <v-container>
    <Navbar />
    <v-card variant="text">
      <v-card-text class="d-flex align-center ga-3 mt-4 px-1">
        <v-avatar size="70"
          ><v-img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm3RFDZM21teuCMFYx_AROjt-AzUwDBROFww&s"
          ></v-img
        ></v-avatar>
        <div>
          <h4 class="text-h6 text-primary">Natanael Oliveira</h4>
          <span class="text-body-2 text-contrast02">natanael@gmail.com</span>
        </div>
      </v-card-text>
    </v-card>
  </v-container>
  <v-container>
    <h2 class="text-subtitle-1 mb-2">Carrinho</h2>
    <div class="d-flex ga-2 flex-column">
      <v-card variant="flat" color="background" v-for="n in 10" :key="n">
        <v-card-text class="d-flex ga-3">
          <v-img
            width="110"
            max-width="110"
            rounded="lg"
            src="https://static.wixstatic.com/media/a85c73_8e4f04aa2906481bb6945e4660aeb9bf~mv2.jpg/v1/fill/w_618,h_450,fp_0.50_0.41,q_80,enc_auto/capa-tapioca-tradicional.jpg"
          ></v-img>
          <div>
            <h4 class="text-subtitle-1">Tapioca com ovo</h4>
            <span></span>
          </div>
        </v-card-text>
      </v-card>
    </div>
  </v-container>
</template>
