<script lang="ts" setup>
import { getCurrentInstance, ref } from 'vue'
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

const navigateToPageSalesSummary = (id: number) => {
  router.push({ name: 'resumoVendas', params: { id: `${id}` } })
}
</script>

<template>
  <div class="d-flex justify-space-between align-center">
    <h5 class="text-subtitle-1 text-contrast my-4">Resumo de vendas</h5>
    <v-btn density="compact" variant="plain" class="font-weight-regular" color="#a5a5a5"
      >Ver tudo <v-icon>mdi-chevron-right</v-icon></v-btn
    >
  </div>

  <v-slide-group>
    <v-slide-group-item v-for="item in salesSummaryList" :key="item.id" v-slot="{ toggle }">
      <v-card color="dark01" width="70vw" max-width="350px" class="mr-4" @click="toggle">
        <v-card-text class="d-flex flex-column ga-2 justify-space-between h-100">
          <div>
            <div class="d-flex justify-space-between align-center">
              <h4 class="text-h6">{{ date.format(item.date, 'normalDate') }}</h4>
              <v-btn
                size="small"
                icon="mdi-chevron-right"
                variant="plain"
                @click="navigateToPageSalesSummary(item.id)"
              ></v-btn>
            </div>
            <div class="d-flex justify-space-between align-center">
              <h4 class="text-subtitle-2" style="color: #a5a5a5">{{ limitText(item.name) }}</h4>
            </div>
          </div>

          <div>
            <div class="w-100 d-flex ga-1 mb-2">
              <div
                class="bg-success rounded-lg"
                :style="`width: ${(item.values.paid / item.values.total) * 100}%; height: 8px`"
              ></div>
              <div
                class="bg-warning rounded-lg"
                :style="`width: ${(item.values.pending / item.values.total) * 100}%; height: 8px`"
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
