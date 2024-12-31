<script lang="ts" setup>
import type { StandItem } from '@/shared/interfaces'
import { ref } from 'vue'

defineProps<{
  item: StandItem
}>()

const emit = defineEmits<{
  (event: 'show-stand', payload: { id: string }): void
  (event: 'remove-stand', payload: { id: string }): void
  (event: 'edit-stand', payload: { id: string }): void
}>()

const removalConfirmed = ref<boolean>()
</script>

<template>
  <v-card
    elevation="0"
    class="my-4 rounded-xl"
    @click="emit('show-stand', { id: item.id })"
    :color="item.color"
  >
    <v-card-title class="text-right pb-0 pt-2"
      ><v-icon size="25">mdi-chevron-right</v-icon></v-card-title
    >
    <v-card-text class="px-6 py-0">
      <h1 class="text-h6" style="margin-bottom: -0.5rem">{{ item.name }}</h1>
    </v-card-text>

    <v-card-actions class="d-flex justify-end pt-0">
      <v-menu @update:modelValue="removalConfirmed = false">
        <template v-slot:activator="{ props }">
          <v-btn icon="mdi-dots-vertical" v-bind="props" @click.stop />
        </template>
        <v-list density="comfortable">
          <v-list-item link @click="emit('edit-stand', { id: item.id })" append-icon="mdi-pencil"
            >Editar</v-list-item
          >
          <v-list-item
            link
            append-icon="mdi-delete"
            @click.stop="removalConfirmed = true"
            v-if="!removalConfirmed"
          >
            Remover
          </v-list-item>
          <v-list-item
            v-else
            link
            @click="emit('remove-stand', { id: item.id })"
            append-icon="mdi-alert-remove-outline"
            class="text-orange"
          >
            Confirmar
          </v-list-item>
        </v-list>
      </v-menu>
    </v-card-actions>
  </v-card>
</template>
