<script lang="ts" setup>
import CreateStandModal from '@/components/client/stands/createStand/modal.vue'
import StandList from '@/components/client/stands/standList/standList.vue'
import { ROUTES } from '@/shared/consts'
import { useTemplateRef } from 'vue'

const createStandModalRef = useTemplateRef('createStandModalRef')
const standListRef = useTemplateRef('standListRef')

const openCreateStandModal = () => {
  if (createStandModalRef.value) {
    createStandModalRef.value.openModal()
  }
}

const updateStandList = () => {
  if (standListRef.value) {
    standListRef.value.handleUpdateStandList()
  }
}
</script>

<template>
  <v-container>
    <v-card variant="text" class="d-flex justify-end mb-4">
      <router-link :to="{ name: ROUTES.CONFIG.ROOT.NAME }"
        ><v-btn variant="text" icon="mdi-cog" color="contrast"></v-btn
      ></router-link>
    </v-card>
    <v-card variant="text" style="margin-bottom: 5rem">
      <StandList ref="standListRef" />
    </v-card>
    <v-card
      class="d-flex justify-end mt-5"
      variant="text"
      style="position: fixed; bottom: 2rem; right: 2rem"
    >
      <v-btn icon="mdi-plus" color="primary" size="large" @click="openCreateStandModal" />
    </v-card>
  </v-container>
  <CreateStandModal ref="createStandModalRef" @created="updateStandList" />
</template>
