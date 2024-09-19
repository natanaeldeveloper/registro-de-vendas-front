<script setup lang="ts"></script>

<template>
  <v-overlay :model-value="$overlay.value" class="align-center justify-center" persistent>
    <v-progress-circular color="primary" size="64" indeterminate></v-progress-circular>
  </v-overlay>
</template>
