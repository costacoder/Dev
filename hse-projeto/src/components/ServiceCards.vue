<template>
  <v-container class="py-16" id="servicos">
    <div class="text-center mb-12">
      <v-chip
        color="accent"
        variant="flat"
        size="small"
        label
        class="px-4 mb-3 font-weight-bold text-white text-uppercase elevation-2"
      >
        Planos
      </v-chip>
      <h2 class="text-h4 font-weight-bold mb-2 text-primary">Nossos Planos de Limpeza</h2>
      <p class="text-grey-darken-1">Escolha o cuidado ideal para o seu aparelho</p>
    </div>

    <v-row align="stretch" justify="center">
      <v-col
        v-for="(plano, i) in planos"
        :key="i"
        cols="12"
        sm="6"
        md="6"
        lg="4"
        class="d-flex position-relative pb-8"
      >
        <v-card
          class="mx-auto d-flex flex-column w-100 planos-card"
          :class="{ 'featured-card': plano.featured }"
          :elevation="plano.featured ? 12 : 2"
          rounded="xl"
        >
          <div v-if="plano.featured" class="badge-wrapper">
            <v-chip
              color="accent"
              size="small"
              variant="flat"
              class="font-weight-bold text-white px-4 elevation-4"
            >
              <v-icon icon="mdi-star" size="14" class="mr-1"></v-icon>
              Mais pedido
            </v-chip>
          </div>

          <v-sheet
            :color="plano.color"
            class="pa-6 text-center text-white"
            :class="plano.featured ? 'pt-10' : 'pt-6'"
            rounded="t-xl"
          >
            <v-icon :icon="plano.icon" size="32" class="mb-2 opacity-80"></v-icon>
            <div class="text-h6 font-weight-bold">{{ plano.titulo }}</div>
            <div class="text-caption opacity-80 mt-1">{{ plano.subtitulo }}</div>
          </v-sheet>

          <v-card-text class="pt-5 flex-grow-1">
            <v-list density="compact" bg-color="transparent">
              <v-list-item v-for="(item, j) in plano.features" :key="j" class="px-0 py-1">
                <template v-slot:prepend>
                  <v-icon color="success" icon="mdi-check-circle" size="18" class="mr-2"></v-icon>
                </template>
                <v-list-item-title class="text-body-2 feature-text">{{ item }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-card-text>

          <v-divider class="mx-4 opacity-30"></v-divider>

          <v-card-actions class="justify-center pa-5">
            <v-btn
              :color="plano.color"
              variant="flat"
              rounded="pill"
              block
              class="btn-orcamento font-weight-bold"
              :href="gerarLinkWhatsapp(plano.titulo)"
              target="_blank"
              prepend-icon="mdi-whatsapp"
            >
              Solicitar orçamento
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
// Dados Centralizados
const telefone = '5516993741071'

const planos = [
  {
    titulo: 'Essencial',
    subtitulo: 'Manutenção preventiva',
    color: 'primary',
    icon: 'mdi-air-filter',
    features: [
      'Limpeza de filtros',
      'Higienização da evaporadora',
      'Aplicação de bactericida',
      'Verificação de dreno',
    ],
  },
  {
    titulo: 'Intermediário',
    subtitulo: 'O equilíbrio perfeito',
    color: 'primary',
    icon: 'mdi-shield-check',
    featured: true,
    features: [
      'Tudo do Essencial',
      'Limpeza da condensadora',
      'Verificação de carga de gás',
      'Limpeza do gabinete',
    ],
  },
  {
    titulo: 'Premium',
    subtitulo: 'Limpeza profunda',
    color: 'accent',
    icon: 'mdi-star-circle',
    features: [
      'Tudo do Intermediário',
      'Desmontagem completa',
      'Limpeza da turbina',
      'Revitalização de plásticos',
    ],
  },
]

// Função para criar a mensagem automática personalizada
const gerarLinkWhatsapp = (nomePlano) => {
  const mensagem = encodeURIComponent(
    `Olá! Vi o site de vocês e gostaria de solicitar um orçamento para o plano *${nomePlano}*.`,
  )
  return `https://wa.me/${telefone}?text=${mensagem}`
}
</script>

<style scoped>
/* Estilos preservados das interações anteriores para manter responsividade e design */
.planos-card {
  overflow: visible !important;
  position: relative;
  transition: all 0.3s ease;
  min-width: 280px;
}
.featured-card {
  border: 2px solid rgb(var(--v-theme-primary)) !important;
}
@media (min-width: 1264px) {
  .featured-card {
    transform: translateY(-12px);
  }
}
.badge-wrapper {
  position: absolute;
  top: -16px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
}
.feature-text {
  white-space: normal !important;
  line-height: 1.2;
}
.btn-orcamento {
  text-transform: none;
  letter-spacing: 0;
  font-size: 0.875rem !important;
}
@media (max-width: 1263px) {
  .v-col {
    max-width: 450px;
    margin: 0 auto;
  }
}
.opacity-80 {
  opacity: 0.8;
}
.opacity-30 {
  opacity: 0.3;
}
</style>
