<script lang="ts" setup>
import Navbar from '@/components/salesSummary/navbar/navbar.vue'
import { useRoute } from 'vue-router'

const { params } = useRoute()
const id = params['id']
</script>

<template>
  <v-container>
    <Navbar />
    <div>
      <h1>Summary {{ id }}</h1>
    </div>
  </v-container>
</template>
