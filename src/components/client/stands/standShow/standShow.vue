<script lang="ts" setup>
import { ROUTES } from '@/shared/consts'
import { useStandStore } from '@/stores'
import { updateColorTheme } from '@/utils/ui'
import { onMounted, useTemplateRef } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import EditStandModal from '../editStand/modal.vue'

const router = useRouter()
const route = useRoute()
const standStore = useStandStore()
const editStandModalRef = useTemplateRef('editStandModalRef')

const openModalEditStand = () => {
  const id = standStore.currentStand?.id ?? ''
  editStandModalRef.value?.openModal({ id })
}

const handleFindCurrentStand = async () => {
  const id = route.params['id'] as string
  await standStore.findCurrentStandById(id)
  updateColorTheme(standStore.currentStand?.color)
}

onMounted(() => {
  handleFindCurrentStand()
})
</script>

<template>
  <v-card :color="standStore.currentStand?.color" variant="flat" class="rounded-0">
    <v-card-text>
      <div variant="text" class="d-flex justify-space-between">
        <v-btn
          icon="mdi-arrow-left"
          variant="text"
          @click="router.push({ name: ROUTES.STANDS.ROOT.NAME })"
        ></v-btn>
        <v-btn
          variant="text"
          icon="mdi-cog"
          @click="router.push({ name: ROUTES.CONFIG.ROOT.NAME })"
        ></v-btn>
      </div>
      <div class="d-flex justify-space-between align-center mt-4">
        <v-icon size="35">mdi-store</v-icon>
        <h1 class="text-h5 py-4 px-4">{{ standStore.currentStand?.name }}</h1>
        <v-menu>
          <template v-slot:activator="{ props }">
            <v-btn icon="mdi-dots-vertical" variant="text" v-bind="props" @click.stop />
          </template>
          <v-list density="comfortable">
            <v-list-item link @click="openModalEditStand" append-icon="mdi-pencil"
              >Editar</v-list-item
            >
          </v-list>
        </v-menu>
      </div>
    </v-card-text>
  </v-card>
  <v-card variant="text">
    <v-card-text>
      <div class="mt-4">
        <v-btn
          append-icon="mdi-plus"
          class="text-capitalize"
          color="primary"
          variant="outlined"
          @click="router.push({ name: ROUTES.CASHIER.CREATE.NAME })"
          >Abrir novo caixa</v-btn
        >
      </div>
    </v-card-text>
  </v-card>
  <EditStandModal ref="editStandModalRef" @updated="handleFindCurrentStand" />
</template>
