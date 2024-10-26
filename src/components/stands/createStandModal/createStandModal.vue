<script lang="ts" setup>
import { standService } from '@/shared/services/stand/standService'
import { useField, useForm } from 'vee-validate'
import { getCurrentInstance } from 'vue'
import * as yup from 'yup'

const props = defineProps({
  dialog: Boolean
})

const { proxy } = getCurrentInstance()!

const emit = defineEmits(['update:dialog', 'saved'])

const { handleSubmit, handleReset } = useForm({
  validationSchema: yup.object({
    name: yup.string().min(3).required()
  })
})

const name = useField('name')

const onSubmit = handleSubmit(({ name }) => {
  proxy?.$overlay.start()
  standService
    .create({ name })
    .then(() => {
      closeModal()
      emit('saved')
    })
    .finally(() => proxy?.$overlay.stop())
})

const closeModal = () => {
  handleReset()
  emit('update:dialog', false)
}
</script>

<template>
  <v-dialog
    width="400px"
    v-bind:model-value="props.dialog"
    @update:modelValue="
      (e) => {
        emit('update:dialog', e)
      }
    "
    persistent
  >
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
              <h6 class="text-subtitle-1 mb-1">Selecionar cor tema</h6>
              <div class="d-flex ga-2">
                <v-btn icon="" density="comfortable" color="primary"></v-btn>
                <v-btn icon="" density="comfortable" color="success"></v-btn>
                <v-btn icon="" density="comfortable" color="warning"></v-btn>
                <v-btn icon="" density="comfortable" color="error"></v-btn>
              </div>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions class="mb-2 mx-2">
          <v-btn @click="closeModal" :disabled="proxy?.$overlay.value">Cancelar</v-btn>
          <v-btn color="primary" variant="flat" type="submit" :loading="proxy?.$overlay.value"
            >Salvar</v-btn
          >
        </v-card-actions>
      </v-card>
    </form>
  </v-dialog>
</template>
