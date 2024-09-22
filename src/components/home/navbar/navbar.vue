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
      <h6 class="text-h6 text-contrast">Natanael</h6>
    </div>
    <v-text-field
      v-if="showSearch"
      ref="input-search"
      :autofocus="true"
      hide-details
      density="compact"
      variant="outlined"
      prepend-inner-icon="mdi-magnify"
      color="contrast"
      @click:clear="showSearch = false"
    />

    <div>
      <v-btn
        icon="mdi-close"
        variant="plain"
        color="contrast"
        v-if="showSearch"
        @click="showSearch = false"
      ></v-btn>
      <v-btn
        v-if="!showSearch"
        icon="mdi-magnify"
        variant="plain"
        color="contrast"
        @click="showSearch = true"
      ></v-btn>
      <v-btn icon="mdi-bell-outline" variant="plain" color="contrast"></v-btn>
    </div>
  </header>
</template>
