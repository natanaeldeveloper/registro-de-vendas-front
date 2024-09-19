<script setup lang="ts">
import { LottieAnimation } from 'lottie-web-vue'
import successJson from '@/assets/success.json'
import networkErrorjson from '@/assets/networkError.json'
import errorJson from '@/assets/error.json'
import type { ModalFeedbackType } from '@/stores/modalFeedback'

const animationData: Record<ModalFeedbackType, { icon: any; width: number; speed?: number }> = {
  SUCCESS: {
    icon: successJson,
    width: 100
  },
  ERROR: {
    icon: errorJson,
    width: 100,
    speed: 1.5
  },
  ERR_NETWORK: {
    icon: networkErrorjson,
    width: 250
  }
}
</script>

<template>
  <v-dialog v-model="$modalFeedback.dialog" width="450">
    <v-card>
      <v-card-title>
        <div class="d-flex justify-space-between w-100">
          <h4 class="text-h6">{{ $modalFeedback.title }}</h4>
          <v-btn
            density="comfortable"
            variant="text"
            icon="mdi-close"
            color="error"
            @click="$modalFeedback.closeModal"
          ></v-btn>
        </div>
      </v-card-title>
      <v-card-text>
        <div class="d-flex flex-column align-center px-2">
          <LottieAnimation
            :style="`width: ${animationData[$modalFeedback.modalType].width}px`"
            :animation-data="animationData[$modalFeedback.modalType].icon"
            :auto-play="true"
            :loop="false"
            :speed="animationData[$modalFeedback.modalType].speed ?? 1"
            ref="anim"
          />
          <h4 class="text-h6 text-center mt-2">{{ $modalFeedback.message }}</h4>
        </div>
      </v-card-text>
      <v-card-actions>
        <v-btn @click="$modalFeedback.closeModal">Fechar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
