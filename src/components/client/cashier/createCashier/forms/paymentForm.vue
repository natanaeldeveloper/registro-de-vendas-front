<template>
  <form>
    <v-card variant="text">
      <v-card-text>
        <v-row>
          <v-col class="pt-0">
            <v-chip-group selected-class="bg-primary" multiple>
              <v-chip value="cash" text="Espécie" variant="outlined" filter></v-chip>
              <v-chip value="pix" text="PIX" variant="outlined" filter></v-chip>
              <v-chip value="card" text="Cartão" variant="outlined" filter></v-chip>
            </v-chip-group>
          </v-col>
        </v-row>

        <div class="d-flex justify-space-between align-center">
          <h6 class="text-subtitle-1 text-grey my-3">Informações do PIX</h6>
          <v-switch color="primary" label="Editar" density="compact" hide-details></v-switch>
        </div>
        <div>
          <v-row>
            <v-col class="py-2">
              <v-text-field label="Chave PIX" density="comfortable" variant="outlined" />
            </v-col>
          </v-row>
          <v-row>
            <v-col class="py-2">
              <v-text-field label="Nome do proprietário" density="comfortable" variant="outlined" />
            </v-col>
          </v-row>
        </div>
        <v-row>
          <v-col class="d-flex ga-4 py-0">
            <v-switch inset color="primary" label="Permitir o adiamento de pagamentos"></v-switch>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </form>
</template>
