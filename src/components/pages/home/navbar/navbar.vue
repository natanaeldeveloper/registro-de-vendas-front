<script lang="ts" setup>
import { ROUTES } from '@/shared/consts'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const showSearch = ref(false)

const router = useRouter()

const navigateToRouteConfig = () => {
  router.push({ name: ROUTES.CONFIG.NAME })
}
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

    <div class="d-flex align-center">
      <v-btn
        v-if="!showSearch"
        icon="mdi-magnify"
        variant="text"
        @click="showSearch = true"
      ></v-btn>

      <v-btn icon="mdi-cog" variant="plain" @click="navigateToRouteConfig"></v-btn>
    </div>
  </header>
</template>
