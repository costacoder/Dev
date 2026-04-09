<script setup>
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'

const drawer = ref(false)

// Dados centralizados para facilitar manutenção
const telefone = '5516993741071'
const mensagemWhatsPadrao = encodeURIComponent(
  'Olá! Vi o site de vocês e gostaria de solicitar um orçamento para limpeza de ar-condicionado.',
)

const menuItems = [
  { title: 'Início', icon: 'mdi-home', to: '#' },
  { title: 'Planos', icon: 'mdi-format-list-bulleted', to: '#planos' },
  { title: 'Sobre', icon: 'mdi-account', to: '#profissional' },
]
</script>

<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      temporary
      location="right"
      class="custom-drawer"
      width="280"
      touchless
    >
      <div class="d-flex justify-end pa-2">
        <v-btn icon="mdi-close" variant="text" color="primary" @click="drawer = false"></v-btn>
      </div>

      <div class="px-3 pb-5 d-flex justify-center">
        <v-img
          src="/src/assets/logo-hse-small.png"
          alt="Logo HSE Climatização"
          width="130"
          contain
        />
      </div>

      <v-divider class="mx-4"></v-divider>

      <v-list nav class="pa-4">
        <v-list-item
          v-for="item in menuItems"
          :key="item.title"
          :href="item.to"
          @click="drawer = false"
          class="mb-2 py-3 custom-item"
        >
          <template v-slot:prepend>
            <v-icon :icon="item.icon" color="primary" size="26"></v-icon>
          </template>

          <v-list-item-title class="text-primary font-weight-bold">
            {{ item.title }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <TheHeader v-if="!drawer" @toggle-drawer="drawer = !drawer" />

    <v-main>
      <router-view />
      <TheFooter />
    </v-main>

    <v-btn
      v-if="!drawer"
      icon="mdi-whatsapp"
      color="#25D366"
      size="x-large"
      position="fixed"
      location="bottom right"
      class="ma-6 z-index-top"
      elevation="8"
      :href="`https://wa.me/${telefone}?text=${mensagemWhatsPadrao}`"
      target="_blank"
    >
      <v-icon size="35" color="white">mdi-whatsapp</v-icon>
    </v-btn>
  </v-app>
</template>

<style>
/* 1. ESTILIZAÇÃO DA GAVETA QUANDO ABERTA */
.custom-drawer {
  height: auto !important;
  max-height: fit-content !important;
  top: 16px !important;
  right: 16px !important;
  border-radius: 24px !important;
  background: rgba(255, 255, 255, 0.98) !important;
  backdrop-filter: blur(10px);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2) !important;
  border: none !important;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1) !important;
  visibility: visible !important;
}

/* 2. O SEGREDO PARA SUMIR 100% QUANDO FECHADA */
.v-navigation-drawer--temporary:not(.v-navigation-drawer--active) {
  transform: translateX(130%) !important;
  display: none !important;
}

.v-navigation-drawer--active {
  display: block !important;
}

.custom-item {
  border-radius: 12px !important;
}

.z-index-top {
  z-index: 9999 !important;
}

html {
  scroll-behavior: smooth;
}
</style>
