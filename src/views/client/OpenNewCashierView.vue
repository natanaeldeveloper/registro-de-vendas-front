<script lang="ts" setup>
import OpenNewCashierForm from '@/components/client/cashier/createCashier/createCashier.vue'
import { ROUTES } from '@/shared/consts'
import { useStandStore } from '@/stores'
import { useRouter } from 'vue-router'

const router = useRouter()
const { currentStand } = useStandStore()
</script>

<template>
  <!-- HEADER -->
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
      <div class="d-flex flex-column px-2 py-3">
        <h1 class="text-h6">
          <v-icon size="30" class="mr-3">mdi-printer-pos-plus</v-icon>Abrir novo caixa
        </h1>
      </div>
    </v-card-text>
  </v-card>
  <!-- FORM -->
  <OpenNewCashierForm />
</template>
