<script setup lang="ts">
import ModalFeedback from './components/helpers/modals/modalFeedback.vue'
</script>

<template>
  <main class="bg-background">
    <!-- Content -->
    <RouterView />

    <!-- Helpers -->
    <ModalFeedback />
    <!-- <Overlay /> -->
  </main>
</template>

<style scoped>
main {
  min-height: 100vh;
}
</style>
