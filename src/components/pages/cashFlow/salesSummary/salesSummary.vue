<script setup lang="ts">
import { ref } from 'vue'

const showSearch = ref(false)
</script>

<template>
  <div class="d-flex flex-column ga-2">
    <header class="d-flex ga-3 w-100 justify-space-between align-center mt-4 mb-2">
      <h2 class="text-subtitle-1 text-contrast" v-if="!showSearch">Minhas vendas</h2>
      <v-text-field
        v-if="showSearch"
        ref="input-search"
        hide-details
        density="compact"
        variant="outlined"
        prepend-inner-icon="mdi-magnify"
        color="contrast"
        rounded="xl"
        :autofocus="true"
        clearable
        @click:clear="showSearch = false"
      />
      <div>
        <v-btn
          v-if="!showSearch"
          icon="mdi-magnify"
          variant="plain"
          color="contrast"
          @click="showSearch = true"
        ></v-btn>
      </div>
    </header>
    <div class="overflow-y-auto" style="max-height: 500px">
      <v-card
        v-for="item in 14"
        :key="item"
        elevation="0"
        color="contrast02"
        @click="null"
        class="my-2"
      >
        <v-card-text class="d-flex justify-space-between align-center px-3">
          <div class="d-flex ga-2 align-center">
            <v-avatar>C{{ item }}</v-avatar>
            <span class="text-subtitle-1">Cliente {{ item <= 9 ? `0${item}` : item }}</span>
          </div>
          <div class="d-flex ga-4 align-center">
            <div class="d-flex flex-column align-end">
              <span class="text-caption text-success" v-if="item % 2 === 0"
                >R$ 2.00 <v-icon size="12">mdi-arrow-up</v-icon></span
              >
              <span class="text-caption text-warning" v-else
                >R$ 1.00 <v-icon size="12">mdi-clock-time-ten-outline</v-icon></span
              >
              <span class="text-subtitle-1 font-weight-bold">R$ 233.00</span>
            </div>
            <div>
              <v-icon>mdi-chevron-right</v-icon>
            </div>
          </div>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>
