<script lang="ts" setup>
import { productService } from '@/services/product/productService'
import type { ProductItem } from '@/shared/interfaces'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import detailsForm from './forms/detailsForm.vue'
import paymentForm from './forms/paymentForm.vue'
import stockForm from './forms/stockForm.vue'

const route = useRoute()
const productList = ref<ProductItem[]>([])
const standId = ref<string>('')
const currentStep = ref<number>(0)
const steps = ref(3)

const stepsComponent = [
  detailsForm,
  paymentForm,
  stockForm
]

onMounted(async () => {
  standId.value = route.params['id'] as string
  const res = await productService.getAll(standId.value)
  productList.value = res.data
})
</script>

<template>
    <v-stepper v-model="currentStep" elevation="0" bg-color="transparent">
      <template v-slot:default="{ prev, next }">
        <v-stepper-header style="background-color: transparent; box-shadow: none;">
          <template v-for="n in steps" :key="`${n}-step`">
            <v-stepper-item
              :complete="currentStep > n"
              :step="`Step {{ n }}`"
              :value="n"
              color="primary"
            ></v-stepper-item>

            <v-divider
              v-if="n !== steps"
              :key="n"
            ></v-divider>
          </template>
        </v-stepper-header>

        <v-stepper-window>
          <v-stepper-window-item
            v-for="n in steps"
            :key="`${n}-content`"
            :value="n"
          >
            <component :is="stepsComponent[n - 1]" />
          </v-stepper-window-item>
        </v-stepper-window>

        <v-stepper-actions
          @click:next="next"
          @click:prev="prev"
        ></v-stepper-actions>
      </template>
    </v-stepper>
</template>
