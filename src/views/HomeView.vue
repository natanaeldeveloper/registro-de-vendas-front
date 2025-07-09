<script lang="ts" setup>
import { vuetify } from '@/plugins/vuetify'
import { ROUTES } from '@/shared/consts'
import { toggleTheme } from '@/utils/ui'
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useTheme } from 'vuetify'

const router = useRouter()

const { current, name: themeName } = useTheme()
const currentThemeDark = ref<boolean>(vuetify.theme.current.value.dark)

// Você pode acessar qualquer outra cor definida:
const colors = computed(() => current.value.colors)

const getColorTone = computed(() => (themeName.value === 'light' ? 'lighten' : 'darken'))
const getColorReverseTone = computed(() => (themeName.value === 'light' ? 'darken' : 'lighten'))

const drawer = ref(false)

const summaryDay = ref([
  {
    title: 'Total Vendido',
    value: 'R$ 1.450,00',
    color: 'light-blue'
  },
  {
    title: 'Total Apurado',
    value: 'R$ 1.000,00',
    color: 'green'
  },
  {
    title: 'Valores a Receber',
    value: 'R$ 450,00',
    color: 'orange'
  }
])

const navigation = ref([
  {
    title: 'Nova Venda',
    href: '#cobranca',
    icon: 'add'
  },
  {
    title: 'Cobranças',
    href: '#cobranca',
    icon: 'real_estate_agent'
  },
  {
    title: 'Produtos',
    href: '#products',
    icon: 'package_2'
  },
  {
    title: 'Divulgação',
    href: '#divulgation',
    icon: 'storefront'
  },
  {
    title: 'Rendimentos',
    href: '#relatorios',
    icon: 'finance_mode'
  }
])
</script>
<template>
  <v-app>
    <v-app-bar elevation="0" :color="colors.background">
      <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title
        ><span>Bem</span
        ><span class="font-weight-bold" :style="{ color: colors.primary }"
          >Vendi</span
        ></v-toolbar-title
      >

      <v-space></v-space>

      <v-btn icon="mdi-dots-vertical" variant="text"></v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" temporary :color="colors.background">
      <v-list>
        <!-- <v-list-item link @click="router.push({ name: ROUTES.CONFIG.ROOT.NAME })">
          <v-list-item-text>Configurações</v-list-item-text>
        </v-list-item> -->
        <v-list-item>
          <v-list-item-text>
            Alterar tema
            <v-switch
              inset
              v-model="currentThemeDark"
              color="primary"
              @change="toggleTheme()"
              :label="themeName"
            ></v-switch>
          </v-list-item-text>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <!-- Header -->
      <header class="d-flex justify-space-between w-100 py-4 px-4">
        <div class="mt-4">
          <h4 class="text-h5 font-weight-bold">Bem Vindo de volta,</h4>
          <h5 class="text-h5">Natanael</h5>
          <div class="d-flex align-center ga-1 mt-2">
            <span class="material-symbols-outlined text-grey-darken-1 text-subtitle-2">
              calendar_today
            </span>
            <span class="text-subtitle-2 text-grey-darken-1"> 03 de Outubro 2025</span>
          </div>
        </div>
      </header>

      <!-- Opções -->
      <section class="overflow-x-auto">
        <div class="d-flex py-4 px-4 justify-center" style="width: max-content">
          <v-card
            variant="text"
            height="120"
            v-for="item in navigation"
            :key="item.title"
            @click="() => {}"
            class="d-flex flex-column justify-center align-center rounded-xl ga-2 px-3"
          >
            <v-card class="rounded-circle" height="70" width="70" variant="outlined">
              <v-card-text class="d-flex align-center justify-center h-100 flex-column text-center">
                <span
                  class="material-symbols-outlined"
                  style="user-select: none; font-size: 1.8rem"
                  >{{ item.icon }}</span
                >
              </v-card-text>
            </v-card>

            <h3 style="line-height: 1.4rem; user-select: none" class="text-subtitle-2">
              {{ item.title }}
            </h3>
          </v-card>
        </div>
      </section>

      <!-- Resumo da semana -->
      <section class="px-6 mt-4">
        <v-row>
          <v-col cols="12">
            <div class="d-flex ga-1 align-center">
              <h3 class="text-h6">Resumo de Vendas do Dia</h3>
              <span class="material-symbols-outlined"> keyboard_arrow_right </span>
            </div>
          </v-col>
          <v-col class="px-1 py-1" v-for="item in summaryDay" :key="item.title">
            <v-card class="rounded-lg" :color="`${item.color}-${getColorTone}-4`" variant="flat">
              <v-card-title class="d-flex align-center justify-between pb-1 ga-1">
                <span
                  class="text-subtitle-1 text-pre-wrap"
                  :class="`text-${item.color}-${getColorReverseTone}-4`"
                >
                  {{ item.title }}
                </span>
                <v-btn
                  icon="mdi-information"
                  variant="text"
                  size="small"
                  :class="`text-${item.color}-${getColorReverseTone}-4`"
                ></v-btn>
              </v-card-title>
              <v-card-text>
                <h5
                  class="text-h6 font-weight-bold text-no-wrap"
                  :class="`text-${item.color}-${getColorReverseTone}-4`"
                >
                  {{ item.value }}
                </h5>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <!-- <v-fab class="mb-4 mr-2" absolute app size="x-large" color="primary" icon>
          <v-icon>mdi-plus</v-icon>
          <v-speed-dial activator="parent" location="end top">
            <div class="d-flex justify-end align-center ga-2" style="width: 160px">
              Venda&nbsp;
              <v-btn key="2" color="blue-lighten-1" icon>
                <span class="material-symbols-outlined"> attach_money </span>
              </v-btn>
            </div>
            <div class="d-flex justify-end align-center ga-2" style="width: 160px">
              Venda rápida&nbsp;
              <v-btn key="2" color="green-lighten-1" icon>
                <span class="material-symbols-outlined"> shopping_bag_speed </span>
              </v-btn>
            </div>
            <div class="d-flex justify-end align-center ga-2" style="width: 160px">
              Venda Fiada&nbsp;
              <v-btn key="2" color="orange-lighten-1" icon>
                <span class="material-symbols-outlined"> savings </span>
              </v-btn>
            </div>
          </v-speed-dial>
        </v-fab> -->
      </section>
    </v-main>
  </v-app>
</template>
