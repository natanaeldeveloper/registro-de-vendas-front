<script setup lang="ts"></script>

<template>
  <v-card elevation="0">
    <v-card-text class="d-flex flex-column ga-2">
      <v-card v-for="item in 30" :key="item">
        <v-card-text>
          <h6 class="text-h6">cliente {{ item }}</h6>
        </v-card-text>
      </v-card>
    </v-card-text>
  </v-card>
</template>
