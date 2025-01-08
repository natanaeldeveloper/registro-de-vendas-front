<!-- <script lang="ts" setup>
import { vuetify } from '@/plugins/vuetify'

defineProps<{
  color?: typeof vuetify.theme.current.value.colors
}>()
</script>
<template>
  <v-card variant="flat" :color="currentStand?.color">
    <v-card-text>
      <div variant="text" class="d-flex justify-space-between">
        <v-btn
          icon="mdi-arrow-left"
          variant="text"
          @click="
            router.push({ name: ROUTES.STANDS.DETAILS.NAME, params: { id: `${currentStand?.id}` } })
          "
        ></v-btn>
        <v-btn
          variant="text"
          icon="mdi-cog"
          @click="router.push({ name: ROUTES.CONFIG.ROOT.NAME })"
        ></v-btn>
      </div>
      <div class="d-flex flex-column px-2 py-8">
        <h1 class="text-h5">
          <v-icon size="30" class="mr-3">mdi-printer-pos-plus</v-icon>Abrir novo caixa
        </h1>
        <p class="text-subtitle-1">Texto descrivendo detalhes dessa tela</p>
      </div>
    </v-card-text>
  </v-card>
</template> -->
