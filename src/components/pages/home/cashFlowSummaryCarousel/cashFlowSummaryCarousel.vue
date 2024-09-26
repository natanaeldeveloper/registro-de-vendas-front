<script lang="ts" setup>
import { ROUTES } from '@/shared/consts'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useDate } from 'vuetify'

const router = useRouter()

const date = useDate()

const salesSummaryList = ref([
  {
    id: 1,
    name: 'Congresso - Manhã',
    date: new Date(),
    values: {
      paid: 40,
      pending: 60,
      total: 100
    }
  },
  {
    id: 2,
    name: 'Pós EBD',
    date: new Date(),
    values: {
      paid: 30,
      pending: 120,
      total: 150
    }
  },
  {
    id: 3,
    name: 'Culto de Missões',
    date: new Date(),
    values: {
      paid: 46.5,
      pending: 3.5,
      total: 50
    }
  },
  {
    id: 1,
    name: 'Congresso - Manhã',
    date: new Date(),
    values: {
      paid: 40,
      pending: 60,
      total: 100
    }
  }
])

const limitText = (value: string) => {
  if (value.length >= 30) {
    return value.slice(0, 30).concat('...')
  }

  return value.slice(0, 30)
}

const navigateToPageCashFlow = (id: number) => {
  router.push({ name: ROUTES.CASH_FLOW.ROOT.NAME, params: { id: `${id}` } })
}
</script>

<template>
  <div class="d-flex justify-space-between align-center mt-2">
    <span class="text-subtitle-1">Fluxos de caixa</span>
    <v-btn density="comfortable" variant="text" class="font-weight-regular"
      >Ver tudo <v-icon>mdi-chevron-right</v-icon></v-btn
    >
  </div>

  <v-slide-group>
    <v-slide-group-item v-for="item in salesSummaryList" :key="item.id">
      <v-card
        width="70vw"
        max-width="350px"
        class="mr-3 my-3"
        @click="navigateToPageCashFlow(item.id)"
      >
        <v-card-text class="d-flex flex-column ga-2 justify-space-between h-100">
          <div>
            <div class="d-flex justify-space-between align-center">
              <h4 class="text-h6">{{ date.format(item.date, 'normalDate') }}</h4>
              <v-icon size="small" icon="mdi-chevron-right" variant="plain"></v-icon>
            </div>
            <div class="d-flex justify-space-between align-center my-1">
              <v-chip color="contrast" variant="tonal" density="compact" size="small">{{
                limitText(item.name)
              }}</v-chip>
            </div>
          </div>

          <div>
            <div class="w-100 d-flex ga-1 mb-2">
              <div
                class="bg-success rounded-lg"
                :style="`width: ${(item.values.paid / item.values.total) * 100}%; height: 5px`"
              ></div>
              <div
                class="bg-warning rounded-lg"
                :style="`width: ${(item.values.pending / item.values.total) * 100}%; height: 5px`"
              ></div>
            </div>
            <div class="d-flex justify-space-between">
              <div class="d-flex align-center ga-2">
                <div class="bg-success rounded-sm" style="width: 10px; height: 10px"></div>
                <span class="text-body-2">Pago</span>
              </div>
              <span class="text-body-2">R${{ item.values.paid.toFixed(2) }}</span>
            </div>
            <div class="d-flex justify-space-between">
              <div class="d-flex align-center ga-2">
                <div class="bg-warning rounded-sm" style="width: 10px; height: 10px"></div>
                <span class="text-body-2">Pendente</span>
              </div>
              <span class="text-body-2">R${{ item.values.pending.toFixed(2) }}</span>
            </div>
            <div class="d-flex justify-space-between">
              <div class="d-flex align-center ga-2">
                <div class="bg-grey rounded-sm" style="width: 10px; height: 10px"></div>
                <span class="text-body-2">Total previsto</span>
              </div>
              <span class="text-body-2 font-weight-bold">R${{ item.values.total.toFixed(2) }}</span>
            </div>
          </div>
        </v-card-text>
      </v-card>
    </v-slide-group-item>
  </v-slide-group>
</template>
