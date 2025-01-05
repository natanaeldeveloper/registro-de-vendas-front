<script lang="ts" setup>
import type { StandItem } from '@/shared/interfaces'
import { ref } from 'vue'

defineProps<{
  item: StandItem | null
}>()

const emit = defineEmits<{
  (event: 'remove-stand', payload: { id: string }): void
  (event: 'edit-stand', payload: { id: string }): void
}>()

const removalConfirmed = ref<boolean>()
</script>

<template>
  <v-menu @update:modelValue="removalConfirmed = false">
    <template v-slot:activator="{ props }">
      <v-btn icon="mdi-dots-vertical" variant="text" v-bind="props" @click.stop />
    </template>
    <v-list density="comfortable">
      <v-list-item link @click="emit('edit-stand', { id: item?.id ?? '' })" append-icon="mdi-pencil"
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
        @click="emit('remove-stand', { id: item?.id ?? '' })"
        append-icon="mdi-alert-remove-outline"
        class="text-orange"
      >
        Confirmar
      </v-list-item>
    </v-list>
  </v-menu>
</template>
