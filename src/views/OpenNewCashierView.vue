<script lang="ts" setup>
import { ROUTES } from '@/shared/consts'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const paymentMethods = ref<string[]>([])

const editablePix = ref(false)

const model = ref<any>(null)
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
  <v-card variant="text" class="pt-3">
    <v-card-text>
      <v-row>
        <v-col class="py-2">
          <v-text-field
            density="comfortable"
            variant="outlined"
            type="date"
            label="dd/mm/yyyy"
          ></v-text-field>
        </v-col>
        <v-col class="py-2">
          <v-text-field
            density="comfortable"
            variant="outlined"
            label="Valor inicial"
            placeholder="0,00"
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
          >
          </v-text-field>
        </v-col>
      </v-row>

      <h6 class="text-subtitle-1 text-grey my-3">Formas de pagamento aceitáveis</h6>

      <v-row>
        <v-col class="pt-0">
          <v-chip-group selected-class="bg-primary" multiple v-model="paymentMethods">
            <v-chip value="especie" text="Espécie" variant="outlined" filter></v-chip>
            <v-chip value="pix" text="PIX" variant="outlined" filter></v-chip>
            <v-chip value="cartao" text="Cartão" variant="outlined" filter></v-chip>
          </v-chip-group>
        </v-col>
      </v-row>

      <template v-if="paymentMethods.includes('pix')">
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
          <v-col class="pb-0">
            <v-text-field
              label="Chave PIX"
              density="comfortable"
              variant="outlined"
              :disabled="!editablePix"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col class="py-0">
            <v-text-field
              label="Nome do proprietário"
              density="comfortable"
              variant="outlined"
              :disabled="!editablePix"
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
              <v-slide-group v-model="model">
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
                  <span class="text-caption d-inline-block text-truncate" style="max-width: 120px"
                    >Tapioca com ovo</span
                  >
                  <v-number-input
                    :reverse="false"
                    controlVariant="stacked"
                    label=""
                    density="compact"
                    variant="outlined"
                    class="w-100"
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
    </v-card-text>
  </v-card>
</template>
