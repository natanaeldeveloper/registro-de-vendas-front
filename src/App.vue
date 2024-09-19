<script setup lang="ts">
import Header from './components/headers/header.vue'
import ModalFeedback from './components/helpers/modals/modalFeedback.vue'
import Overlay from './components/helpers/overlay/overlay.vue'
</script>

<template>
  <!-- Navbar -->
  <Header />

  <!-- Content -->
  <RouterView />

  <!-- Helpers -->
  <ModalFeedback />
  <Overlay />
</template>
