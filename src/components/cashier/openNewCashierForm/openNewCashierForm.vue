<script lang="ts" setup>
import type { CreateCashierBody } from '@/shared/interfaces/cashier'
import { useCashierStore } from '@/stores'
import { useField, useForm } from 'vee-validate'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import * as yup from 'yup'

const editablePix = ref(false)

const { handleReset, handleSubmit } = useForm({
  validationSchema: yup.object({
    payment_methods: yup.array().required().label('Métodos de pagamento'),
    reference_date: yup.date().required().label('Data de referência'),
    initial_cash: yup.number().min(0).label('Caixa inicial'),
    description: yup.string().max(30).label('Descrição do caixa'),
    pix_key: yup.string().when('isOptional', {
      is: true,
      then: yup.string().required().label('Chave PIX'),
      otherwise: yup.string().label('Chave PIX')
    }),
    pix_recipient: yup.string().required().min(3).label('Destinatário da chave PIX')
  })
})

const paymentMethods = useField('payment_methods')
const referenceDate = useField('reference_date')
const description = useField('description')
const initialCash = useField('initial_cash')
const pixKey = useField('pix_key')
const pixRecipient = useField('pix_recipient')

const cashierStore = useCashierStore()
const route = useRoute()

const onSubmit = handleSubmit((values) => {
  const standId = route.params['id'] as string
  cashierStore.create(values as CreateCashierBody, standId)
})
</script>

<template>
  <v-container>
    <form @submit.prevent="onSubmit">
      <v-card variant="text" class="pt-3">
        <v-card-text>
          <v-row>
            <v-col class="py-2">
              <v-text-field
                density="comfortable"
                variant="outlined"
                type="date"
                label="dd/mm/yyyy"
                v-model="referenceDate.value.value"
                :error-messages="referenceDate.errorMessage.value"
              ></v-text-field>
            </v-col>
            <v-col class="py-2">
              <v-text-field
                density="comfortable"
                variant="outlined"
                label="Valor inicial"
                placeholder="0,00"
                v-model="initialCash.value.value"
                :error-messages="initialCash.errorMessage.value"
              >
              </v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col class="py-0">
              <v-text-field
                density="comfortable"
                variant="outlined"
                label="Descrição do caixa (opcional)"
                v-model="description.value.value"
                :error-messages="description.errorMessage.value"
              >
              </v-text-field>
            </v-col>
          </v-row>

          <h6 class="text-subtitle-1 text-grey my-3">Métodos de pagamento aceitáveis</h6>

          <v-row>
            <v-col class="pt-0">
              <v-chip-group
                selected-class="bg-primary"
                multiple
                v-model="paymentMethods.value.value"
              >
                <v-chip value="especie" text="Espécie" variant="outlined" filter></v-chip>
                <v-chip value="pix" text="PIX" variant="outlined" filter></v-chip>
                <v-chip value="cartao" text="Cartão" variant="outlined" filter></v-chip>
              </v-chip-group>
            </v-col>
          </v-row>

          <template>
            <div class="d-flex justify-space-between align-center">
              <h6 class="text-subtitle-1 text-grey my-3">Informações do PIX</h6>
              <v-switch
                color="primary"
                label="Editar"
                density="compact"
                hide-details
                v-model="editablePix"
              ></v-switch>
            </div>
            <v-row>
              <v-col class="py-2">
                <v-text-field
                  label="Chave PIX"
                  density="comfortable"
                  variant="outlined"
                  v-model="pixKey.value.value"
                  :error-messages="pixKey.errorMessage.value"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col class="py-2">
                <v-text-field
                  label="Nome do proprietário"
                  density="comfortable"
                  variant="outlined"
                  v-model="pixRecipient.value.value"
                  :error-messages="pixRecipient.errorMessage.value"
                />
              </v-col>
            </v-row>
          </template>

          <v-row>
            <v-col class="d-flex ga-4 py-0">
              <v-switch inset color="primary" label="Permitir o adiamento de pagamentos"></v-switch>
            </v-col>
          </v-row>

          <v-dialog max-width="500" transition="dialog-top-transition">
            <template v-slot:activator="{ props: activatorProps }">
              <v-card
                color="background"
                variant="outlined"
                class="mt-4 mb-10 rounded-xl"
                v-bind="activatorProps"
              >
                <v-card-title class="py-4">
                  <h6 class="text-primary text-body-1 text-decoration-none px-2">
                    Gerenciar estoque <v-icon>mdi-chevron-right</v-icon>
                  </h6>
                </v-card-title>
                <v-card-text class="px-6">
                  <v-slide-group>
                    <v-slide-group-item v-for="n in 15" :key="n">
                      <div class="d-flex flex-column ga-2 align-center">
                        <v-card
                          :class="['mx-2']"
                          height="50"
                          width="50"
                          color="primary"
                          image="https://static.wixstatic.com/media/a85c73_8e4f04aa2906481bb6945e4660aeb9bf~mv2.jpg/v1/fill/w_618,h_450,fp_0.50_0.41,q_80,enc_auto/capa-tapioca-tradicional.jpg"
                        ></v-card>
                        <span class="text-contrast">10</span>
                      </div>
                    </v-slide-group-item>
                  </v-slide-group>
                </v-card-text>
              </v-card>
            </template>

            <template v-slot:default="{ isActive }">
              <v-card title="Gerenciar estoque" height="500">
                <v-card-title>
                  <v-autocomplete
                    variant="outlined"
                    density="compact"
                    append-inner-icon="mdi-magnify"
                    hide-no-data
                    menu-icon=""
                    :items="['Tapioca', 'Cachorro quente', 'Pastel']"
                  >
                    <template v-slot:item="{ props, item }">
                      <v-list-item v-bind="props" title="" subtitle="">
                        <div class="d-flex ga-3 align-center">
                          <v-card
                            width="50"
                            height="50"
                            image="https://static.wixstatic.com/media/a85c73_8e4f04aa2906481bb6945e4660aeb9bf~mv2.jpg/v1/fill/w_618,h_450,fp_0.50_0.41,q_80,enc_auto/capa-tapioca-tradicional.jpg"
                          ></v-card>
                          <span class="text-body-2">{{ item.value }}</span>
                        </div>
                      </v-list-item>
                    </template>
                  </v-autocomplete>
                </v-card-title>
                <v-card-text class="overflow-y-auto px-0">
                  <div class="d-flex justify-center flex-wrap ga-4">
                    <div class="d-flex flex-column align-center ga-2" v-for="n in 10" :key="n">
                      <v-card
                        height="120"
                        width="120"
                        image="https://static.wixstatic.com/media/a85c73_8e4f04aa2906481bb6945e4660aeb9bf~mv2.jpg/v1/fill/w_618,h_450,fp_0.50_0.41,q_80,enc_auto/capa-tapioca-tradicional.jpg"
                      >
                        <v-card-title class="text-right px-3"
                          ><v-btn icon="mdi-close" density="compact"></v-btn
                        ></v-card-title>
                      </v-card>
                      <span
                        class="text-caption d-inline-block text-truncate"
                        style="max-width: 120px"
                        >Tapioca com ovo</span
                      >
                      <v-number-input
                        :reverse="false"
                        controlVariant="stacked"
                        label=""
                        density="compact"
                        variant="outlined"
                        class="w-100"
                        :min="1"
                      ></v-number-input>
                    </div>
                  </div>
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn text="Fechar" @click="isActive.value = false"></v-btn>
                </v-card-actions>
              </v-card>
            </template>
          </v-dialog>

          <v-row>
            <v-col class="d-flex justify-end ga-4">
              <v-btn @click="handleReset" size="large" variant="outlined">Cancelar</v-btn>
              <v-btn color="primary" type="submit" size="large">Salvar</v-btn>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </form>
  </v-container>
</template>
