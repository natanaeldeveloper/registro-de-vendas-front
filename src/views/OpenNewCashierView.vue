<script lang="ts" setup>
import OpenNewCashierForm from '@/components/cashier/openNewCashierForm/openNewCashierForm.vue'
import { ROUTES } from '@/shared/consts'
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <!-- HEADER -->
  <v-card variant="flat" color="background">
    <v-card-text>
      <div variant="text" class="d-flex justify-space-between">
        <v-btn
          icon="mdi-arrow-left"
          variant="text"
          @click="router.push({ name: ROUTES.STANDS.ROOT.NAME })"
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
        <p class="text-grey text-subtitle-1">Texto descrivendo detalhes dessa tela</p>
      </div>
    </v-card-text>
  </v-card>
  <!-- HEADER FIM -->

  <v-divider class="mb-4"></v-divider>

  <!-- FORM -->
  <OpenNewCashierForm />
</template>
