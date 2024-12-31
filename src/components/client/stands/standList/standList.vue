<script lang="ts" setup>
import { standService } from '@/services/stand/standService'
import type { StandItem } from '@/shared/interfaces'
import { onMounted, ref, useTemplateRef, watch } from 'vue'
import type { TabOptions } from './interfaces'
import StandListItem from './standListItem.vue'
import router from '@/router'
import { ROUTES } from '@/shared/consts'
import EditStandModal from '@/components/client/stands/editStand/modal.vue'

const editStandModalRef = useTemplateRef('editStandModalRef')

defineProps<{
  maxHeight?: string
}>()

const tabs: Record<TabOptions, string> = {
  MY_LIBRARY: 'Minhas Bancas',
  SHARED_WITH_ME: 'Parcerias'
}

const tab = ref<TabOptions>('MY_LIBRARY')

const standList = ref<StandItem[]>([])
const loading = ref<boolean>(false)

/**
 * Buscar lista de stands de acordo com a tab atual
 */
const getStandList: Record<TabOptions, () => Promise<StandItem[]>> = {
  MY_LIBRARY: async () => {
    const res = await standService.getAll()
    return res.data
  },
  SHARED_WITH_ME: async () => {
    return Promise.resolve([])
  }
}

const handleUpdateStandList = async () => {
  loading.value = true
  standList.value = await getStandList[tab.value]()
  loading.value = false
}

const handleRemoveStand = (event: { id: string }) => {
  standService.delete(event.id).then(handleUpdateStandList)
}

const handleEditStand = (event: { id: string }) => {
  if (editStandModalRef.value) {
    editStandModalRef.value.openModal(event)
  }
}

const handleShowStand = (event: { id: string }) => {
  router.push({ name: ROUTES.STANDS.DETAILS.NAME, params: { id: event.id } })
}

watch(tab, handleUpdateStandList)
onMounted(handleUpdateStandList)

defineExpose({
  handleUpdateStandList
})
</script>

<template>
  <v-tabs color="primary" v-model="tab">
    <v-tab
      v-for="(item, index) in tabs"
      :key="index"
      :value="index"
      :loading="loading && index === tab"
      >{{ item }}</v-tab
    >
  </v-tabs>
  <v-tabs-window v-model="tab">
    <template v-if="standList.length > 0">
      <v-tabs-window-item v-for="(_, index) in tabs" :key="index" :value="index">
        <v-card class="overflow-y-auto px-2" :max-height="maxHeight ?? '100%'" variant="text">
          <StandListItem
            v-for="item in standList"
            :item="item"
            :key="item.id"
            @remove-stand="handleRemoveStand($event)"
            @edit-stand="handleEditStand($event)"
            @show-stand="handleShowStand($event)"
          />
        </v-card>
      </v-tabs-window-item>
    </template>
    <template v-else>
      <v-card color="grey" variant="text" height="60vh" class="d-flex align-center justify-center">
        <h1 class="text-h6">Nenhum registro encontrado.</h1>
      </v-card>
    </template>
  </v-tabs-window>
  <EditStandModal ref="editStandModalRef" @updated="handleUpdateStandList" />
</template>
