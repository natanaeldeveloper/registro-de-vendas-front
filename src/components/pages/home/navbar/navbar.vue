<script lang="ts" setup>
import { ref } from 'vue'

const showSearch = ref(false)
</script>

<template>
  <header class="d-flex ga-3 w-100 justify-space-between align-center">
    <div class="d-flex ga-4 align-center" v-if="!showSearch">
      <v-avatar>
        <v-img
          alt="Natanael Oliveira"
          src="https://avatars.githubusercontent.com/u/51293075?v=4"
        ></v-img>
      </v-avatar>
      <h6 class="text-h6">Natanael</h6>
    </div>
    <v-text-field
      v-if="showSearch"
      ref="input-search"
      :autofocus="true"
      hide-details
      density="compact"
      variant="outlined"
      color="primary"
      prepend-inner-icon="mdi-magnify"
      @click:clear="showSearch = false"
      clearable
      rounded="xl"
    />

    <div>
      <v-btn
        v-if="!showSearch"
        icon="mdi-magnify"
        variant="text"
        color="primary"
        @click="showSearch = true"
      ></v-btn>
      <v-btn icon="mdi-bell-outline" variant="text" color="primary"></v-btn>
    </div>
  </header>
</template>
