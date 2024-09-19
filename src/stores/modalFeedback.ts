import { defineStore } from 'pinia'
import { ref } from 'vue'

export type ModalFeedbackType = 'SUCCESS' | 'ERR_NETWORK' | 'ERROR'

export const useModalFeedbackStore = defineStore('modalFeedback', () => {
  const dialog = ref(false)
  const title = ref('')
  const message = ref('')
  const modalType = ref<ModalFeedbackType>('SUCCESS')

  const showModal = (
    type: ModalFeedbackType,
    props?: {
      title?: string
      message?: string | object
    }
  ) => {
    dialog.value = true
    title.value = props?.title ?? ''
    message.value = typeof props?.message == 'string' ? props?.message : ''
    modalType.value = type ?? 'SUCCESS'
  }

  const closeModal = () => {
    dialog.value = false
    title.value = ''
    message.value = ''
  }

  return {
    dialog,
    showModal,
    closeModal,
    title,
    message,
    modalType
  }
})
