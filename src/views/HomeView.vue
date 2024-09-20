<script setup lang="ts"></script>

<template>
  <main>
    <header class="d-flex ga-3 w-100 justify-space-between py-4 px-4">
      <div class="d-flex ga-4 align-center">
        <v-avatar color="success">NA</v-avatar>
        <h6 class="text-h6 text-white">Natanael</h6>
      </div>
      <div>
        <v-btn icon="mdi-magnify" variant="plain" color="white"></v-btn>
        <v-btn icon="mdi-bell-outline" variant="plain" color="white"></v-btn>
      </div>
    </header>
    <v-card color="transparent">
      <v-card-text>
        <v-slide-group>
          <v-slide-group-item v-for="n in 1" :key="n" v-slot="{ toggle, isSelected }">
            <v-card
              v-for="n in 5"
              :key="n"
              :color="
                ['#9529FF', '#FB8500', '#8EDF34', '#4CC9F0', '#B8001C'].find(
                  (_, index) => n - 1 === index
                )
              "
              width="350"
              :height="isSelected ? '240' : '250'"
              class="rounded-xl mx-1"
              @click="toggle"
            >
              <v-card-text>Options {{ n }} {{ isSelected }} </v-card-text>
            </v-card>
          </v-slide-group-item>
        </v-slide-group>
      </v-card-text>
    </v-card>
  </main>
</template>

<style scoped>
main {
  background-color: #131313;
  min-height: 100vh;
}
</style>
