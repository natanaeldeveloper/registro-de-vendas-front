<script lang="ts" setup>
import { standService } from '@/services/stand/standService'
import { useField, useForm } from 'vee-validate'
import { getCurrentInstance } from 'vue'
import * as yup from 'yup'

const { proxy } = getCurrentInstance()!

const emit = defineEmits(['cancel', 'created'])

const { handleSubmit, handleReset } = useForm({
  validationSchema: yup.object({
    name: yup.string().min(3).required(),
    color: yup.string()
  })
})

const name = useField('name')
const color = useField('color')

const onSubmit = handleSubmit(({ name, color }) => {
  proxy?.$overlay.start()
  standService.create({ name, color }).finally(() => {
    proxy?.$overlay.stop()
    emit('created')
  })
})

defineExpose({
  handleReset
})
</script>

<template>
  <form @submit.prevent="onSubmit">
    <v-card>
      <v-card-title class="mx-3 mt-2">
        <h1 class="text-h6">Adicionar nova banca</h1>
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col>
            <v-text-field
              density="compact"
              variant="outlined"
              label="Nome da banca"
              v-model="name.value.value"
              :error-messages="name.errorMessage.value"
            />
            <v-text-field
              type="color"
              density="compact"
              variant="outlined"
              label="Cor tema"
              v-model="color.value.value"
              :error-messages="color.errorMessage.value"
            />
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions class="mb-2 mx-2">
        <v-btn @click="emit('cancel')" :disabled="proxy?.$overlay.value">Cancelar</v-btn>
        <v-btn color="primary" variant="flat" type="submit" :loading="proxy?.$overlay.value"
          >Salvar</v-btn
        >
      </v-card-actions>
    </v-card>
  </form>
</template>
