<template>
  <form>
    <v-card variant="text">
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
      </v-card-text>
    </v-card>
  </form>
</template>
