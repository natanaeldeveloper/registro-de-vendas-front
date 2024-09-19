import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useOverlayStore = defineStore('overlay', () => {
  const value = ref(false)

  const start = () => {
    value.value = true
  }

  const stop = () => {
    value.value = false
  }

  return { value, start, stop }
})
