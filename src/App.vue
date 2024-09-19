<script setup lang="ts">
import ModalFeedback from './components/helpers/modals/modalFeedback.vue'
import Overlay from './components/helpers/overlay/overlay.vue'
</script>

<template>
  <!-- Content -->
  <RouterView />

  <!-- Helpers -->
  <ModalFeedback />
  <Overlay />
</template>
