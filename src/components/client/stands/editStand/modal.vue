<script lang="ts" setup>
import { ref, useTemplateRef } from 'vue'
import Form from './form.vue'

const dialog = ref<boolean>(false)
const standId = ref<string>('')
const formRef = useTemplateRef('formRef')
const emit = defineEmits(['updated'])

const closeModal = () => {
  dialog.value = false
  if (formRef.value) {
    formRef.value.handleReset()
  }
}

const openModal = (event: { id: string }) => {
  standId.value = event.id
  dialog.value = true
}

const updated = () => {
  emit('updated')
  closeModal()
}

defineExpose({
  openModal,
  closeModal
})
</script>
<template>
  <v-dialog v-model="dialog" persistent width="500" @keydown.esc="closeModal">
    <Form ref="formRef" @cancel="closeModal" @updated="updated" :stand-id="standId" />
  </v-dialog>
</template>
