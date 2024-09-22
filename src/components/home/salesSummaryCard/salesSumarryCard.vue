<template>
  <v-slide-group>
    <v-slide-group-item v-for="n in 15" :key="n" v-slot="{ toggle }">
      <v-card
        color="dark01"
        height="200"
        width="70vw"
        max-width="350px"
        class="mr-4"
        @click="toggle"
      >
        <v-card-text class="d-flex flex-column ga-2">
          <div class="d-flex justify-space-between align-center">
            <h4 class="text-h6">{{ n <= 9 ? '0'.concat(`${n}`) : n }} de Out</h4>
            <v-btn size="small" icon="mdi-chevron-right" variant="plain"></v-btn>
          </div>
          <div class="d-flex justify-space-between align-center">
            <h4 class="text-subtitle-2" style="color: #a5a5a5">Ação Social</h4>
            <div>
              <v-avatar size="small" color="primary" style="margin-right: -8px; z-index: 2"
                >NA</v-avatar
              >
              <v-avatar size="small" color="success">PA</v-avatar>
            </div>
          </div>
          <div class="d-flex flex-column ga-2 mt-4">
            <div class="d-flex justify-space-between align-center">
              <span class="font-weight-semibold" style="font-size: 18px">Pago R$ 40,00</span>
            </div>
            <v-progress-linear
              rounded
              model-value="40"
              color="success"
              height="8"
            ></v-progress-linear>
            <span style="color: #a5a5a5">Total esperado R$ 75,00</span>
          </div>
        </v-card-text>
      </v-card>
    </v-slide-group-item>
  </v-slide-group>
</template>
