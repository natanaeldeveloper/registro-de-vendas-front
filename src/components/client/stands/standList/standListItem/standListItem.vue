<script lang="ts" setup>
import type { StandItem } from '@/shared/interfaces'
import StandListItemActions from './standListItemActions.vue'

defineProps<{
  item: StandItem
}>()

const emit = defineEmits<{
  (event: 'show-stand', payload: { id: string }): void
  (event: 'remove-stand', payload: { id: string }): void
  (event: 'edit-stand', payload: { id: string }): void
}>()
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
      <StandListItemActions
        :item="item"
        @edit-stand="emit('edit-stand', $event)"
        @remove-stand="emit('remove-stand', $event)"
      />
    </v-card-actions>
  </v-card>
</template>
