<template>
  <v-app-bar
    flat
    class="text-primary floating-header"
    color="white"
    height="72"
    scroll-behavior="hide"
    scroll-threshold="150"
  >
    <v-container class="d-flex align-center pa-0 fill-height">
      <a href="#" class="d-flex align-center text-decoration-none ml-4 ml-md-0">
        <v-img
          src="/src/assets/logo-hse-small.png"
          alt="Logo HSE Climatização"
          class="logo-img"
          contain
        />
      </a>

      <v-spacer />

      <div class="d-none d-md-flex align-center">
        <v-btn variant="text" @click="scrollTo('planos')" class="font-weight-bold">Planos</v-btn>
        <v-btn variant="text" @click="scrollTo('profissional')" class="font-weight-bold"
          >Sobre</v-btn
        >

        <v-btn
          color="accent"
          prepend-icon="mdi-whatsapp"
          class="ml-4 text-white font-weight-bold"
          rounded="xl"
          variant="flat"
          :href="`https://wa.me/${telefone}?text=${mensagemOrcamento}`"
          target="_blank"
        >
          Orçamento
        </v-btn>
      </div>

      <v-btn
        icon="mdi-menu"
        class="d-md-none mr-2"
        color="primary"
        @click="$emit('toggle-drawer')"
      />
    </v-container>
  </v-app-bar>
</template>

<script setup>
// Dados Centralizados para o WhatsApp
const telefone = '5516993741071'
const mensagemOrcamento = encodeURIComponent(
  'Olá! Vi o site de vocês e gostaria de solicitar um orçamento para manutenção de ar-condicionado.',
)

// Lógica original de scroll suave
const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) {
    const offset = 100
    const top = el.getBoundingClientRect().top + window.pageYOffset - offset
    window.scrollTo({ top, behavior: 'smooth' })
  }
}
</script>

<style scoped>
.floating-header {
  width: calc(100% - 32px) !important;
  left: 16px !important;
  right: 16px !important;
  top: 16px !important;
  margin: 0 auto;
  position: fixed !important;
  z-index: 1000;

  border-radius: 16px !important;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  background: rgba(255, 255, 255, 0.85) !important;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12) !important;
  border: none !important;
}

/* 📱 MOBILE */
@media (max-width: 599px) {
  .logo-img {
    width: 130px;
    margin-left: 8px;
  }
  .v-container {
    padding: 0 8px !important;
  }
}

/* TABLETS */
@media (min-width: 600px) and (max-width: 1024px) {
  .v-container {
    padding: 0 16px !important;
    max-width: 100% !important;
  }
  .logo-img {
    width: 150px;
  }
}

/* 💻 DESKTOP */
@media (min-width: 1025px) {
  .v-container {
    max-width: 1200px !important;
    padding: 0 32px !important;
  }
  .logo-img {
    width: 180px;
  }
}

.logo-img {
  transition: width 0.3s ease;
  display: flex;
  align-items: center;
}
</style>
