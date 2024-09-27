<script setup lang="ts">
import { ref } from 'vue'

const showSearch = ref(false)
</script>

<template>
  <div class="d-flex flex-column ga-2">
    <header class="d-flex ga-3 w-100 justify-space-between align-center mt-4 mb-2 px-4">
      <h2 class="text-subtitle-1" v-if="!showSearch">Minhas vendas</h2>
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
        @click="null"
        class="my-2 mx-2"
        variant="flat"
        color="background"
      >
        <v-card-text class="d-flex justify-space-between align-center px-2 py-3">
          <div class="d-flex ga-2 align-center">
            <v-avatar>C{{ item }}</v-avatar>
            <span class="text-subtitle-1">Cliente {{ item <= 9 ? `0${item}` : item }}</span>
          </div>
          <div class="d-flex ga-2 align-center">
            <div class="d-flex align-center ga-2">
              <v-chip
                variant="tonal"
                density="compact"
                size="small"
                color="success"
                v-if="item % 2 === 0"
                >R$ 2.00&nbsp; <v-icon size="12">mdi-arrow-up</v-icon></v-chip
              >
              <v-chip variant="tonal" density="compact" size="small" color="warning" v-else
                >R$ 2.00&nbsp; <v-icon size="12">mdi-clock-time-ten-outline</v-icon></v-chip
              >
              <span class="text-body-1 font-weight-bold text-contrast">R$ 233.00</span>
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
