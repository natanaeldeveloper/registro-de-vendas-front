// global.d.ts
import type { vuetify } from '@/plugins/vuetify'
import type { useModalFeedbackStore } from '@/stores/modalFeedback'
import type { useOverlayStore } from '@/stores/overlay'

declare module '@vue/runtime-core' {
  // Declaração do tipo da instância do componente
  interface ComponentCustomProperties {
    $modalFeedback: ReturnType<typeof useModalFeedbackStore>
    $overlay: ReturnType<typeof useOverlayStore>
  }
}
