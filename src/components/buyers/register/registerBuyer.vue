<script setup lang="ts">
import type { BuyerCreateBody } from '@/shared/interfaces'
import { buyerService } from '@/shared/services/buyer/buyerService'
import { useField, useForm } from 'vee-validate'
import * as yup from 'yup'

const { handleSubmit, handleReset } = useForm({
  validationSchema: yup.object({
    firstName: yup.string().min(2).required(),
    lastName: yup.string().min(2).required(),
    email: yup.string().email().required()
  })
})

const firstName = useField('firstName')
const lastName = useField('lastName')
const email = useField('email')

const submit = handleSubmit((values) => {
  buyerService.register(values as BuyerCreateBody).then((data) => {
    alert(`Usuário registrado com sucesso: ${JSON.stringify(data)}`)
  })
})
</script>

<template>
  <v-container>
    <v-card elevation="0">
      <v-card-title class="mb-5">
        <h2 class="text-h6">Cadastrar cliente</h2>
      </v-card-title>
      <v-card-text>
        <form @submit.prevent="submit">
          <v-row>
            <v-col cols="12" sm="6" class="py-2">
              <v-text-field
                density="compact"
                variant="outlined"
                color="primary"
                label="Primeiro nome"
                v-model="firstName.value.value"
                :error-messages="firstName.errorMessage.value"
              />
            </v-col>
            <v-col class="py-2">
              <v-text-field
                density="compact"
                variant="outlined"
                color="primary"
                label="Último nome"
                v-model="lastName.value.value"
                :error-messages="lastName.errorMessage.value"
              />
            </v-col>
          </v-row>

          <v-row>
            <v-col class="py-2">
              <v-text-field
                density="compact"
                variant="outlined"
                color="primary"
                label="E-mail"
                v-model="email.value.value"
                :error-messages="email.errorMessage.value"
              />
            </v-col>
          </v-row>

          <v-row>
            <v-col class="px-2 py-2" cols="12" md="6">
              <v-btn class="w-100" variant="outlined" color="primary" @click="handleReset">
                Limpar
              </v-btn>
            </v-col>
            <v-col class="px-2 py-2">
              <v-btn class="w-100" color="primary" type="submit"> Salvar </v-btn>
            </v-col>
          </v-row>
        </form>
      </v-card-text>
    </v-card>
  </v-container>
</template>
