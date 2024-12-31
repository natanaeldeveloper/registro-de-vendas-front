<script lang="ts" setup>
import { ref, useTemplateRef } from 'vue'
import Form from './form.vue'

const dialog = ref<boolean>(false)
const formRef = useTemplateRef('formRef')
const emit = defineEmits(['created'])

const closeModal = () => {
  dialog.value = false
  if (formRef.value) {
    formRef.value.handleReset()
  }
}

const openModal = () => {
  dialog.value = true
}

const created = () => {
  emit('created')
  closeModal()
}

defineExpose({
  openModal,
  closeModal
})
</script>
<template>
  <v-dialog v-model="dialog" persistent width="500" @keydown.esc="closeModal">
    <Form ref="formRef" @cancel="closeModal" @created="created" />
  </v-dialog>
</template>
