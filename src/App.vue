<script setup lang="ts">
import ModalFeedback from './components/helpers/modals/modalFeedback.vue'
</script>

<template>
  <link
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
    rel="stylesheet"
  />

  <link
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
    rel="stylesheet"
  />
  <main>
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
