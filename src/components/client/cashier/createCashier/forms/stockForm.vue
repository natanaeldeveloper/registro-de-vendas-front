<template>
  <form>
    <v-card variant="text">
      <v-card-text>
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
                  text-title="name"
                  text-value="name"
                >
                  <template v-slot:item="{ props, item }">
                    <v-list-item v-bind="props" title="" subtitle="">
                      <div class="d-flex ga-3 align-center">
                        <v-card
                          width="50"
                          height="50"
                          image="https://static.wixstatic.com/media/a85c73_8e4f04aa2906481bb6945e4660aeb9bf~mv2.jpg/v1/fill/w_618,h_450,fp_0.50_0.41,q_80,enc_auto/capa-tapioca-tradicional.jpg"
                        ></v-card>
                        <span class="text-body-2">{{ item.raw.name }}</span>
                      </div>
                    </v-list-item>
                  </template>
                  <template v-slot:selection="{ item }">
                    <span>{{ item.raw.name }}</span>
                  </template>
                </v-autocomplete>
              </v-card-title>
              <v-card-text class="overflow-y-auto px-0">
                <div class="d-flex justify-center flex-wrap ga-4">
                  <div class="d-flex flex-column align-center ga-2" v-for="item in 10" :key="item">
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
                      >{{ item }}</span
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
      </v-card-text>
    </v-card>
  </form>
</template>
