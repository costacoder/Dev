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
        Serviços Oferecidos
      </v-chip>
      <p class="text-grey-darken-1">Da limpeza essencial ao nível máximo de biossegurança</p>

      <div class="d-flex flex-wrap justify-center mt-4" style="gap: 10px">
        <v-chip
          v-for="modelo in modelos"
          :key="modelo.label"
          color="primary"
          variant="tonal"
          size="default"
          class="font-weight-medium px-3"
        >
          <v-icon :icon="modelo.icon" size="16" class="mr-1"></v-icon>
          {{ modelo.label }}
        </v-chip>
      </div>
      <div
        class="d-flex align-center justify-center mt-3 text-body-2 text-primary font-weight-medium"
      >
        <span
          >Atendemos <strong class="text-uppercase text-accent font-weight-bold">todos</strong> os
          modelos e marcas do mercado</span
        >
      </div>
    </div>

    <v-row align="stretch" justify="center" class="mt-4">
      <v-col
        v-for="(servico, i) in servicos"
        :key="i"
        cols="12"
        sm="10"
        md="6"
        lg="4"
        class="d-flex position-relative"
      >
        <v-card
          class="mx-auto d-flex flex-column w-100 servico-card"
          :class="{ 'featured-card': servico.featured }"
          :elevation="servico.featured ? 12 : 3"
          rounded="xl"
        >
          <!-- Badge de destaque -->
          <div v-if="servico.badge" class="badge-wrapper">
            <v-chip
              :color="servico.badgeColor"
              size="small"
              variant="flat"
              class="font-weight-bold text-white px-4 elevation-4"
            >
              <v-icon :icon="servico.badgeIcon" size="14" class="mr-1"></v-icon>
              {{ servico.badge }}
            </v-chip>
          </div>

          <!-- Header colorido com gradiente -->
          <div
            class="card-header pa-6 text-white text-center"
            :class="servico.featured ? 'pt-10' : 'pt-6'"
            :style="{ background: servico.gradient }"
          >
            <div class="header-icon-wrapper mx-auto mb-3">
              <v-icon :icon="servico.icon" size="36" color="white"></v-icon>
            </div>
            <div class="text-h6 font-weight-bold">{{ servico.titulo }}</div>
            <div
              class="text-caption opacity-80 mt-1 font-weight-medium tracking-wide text-uppercase"
            >
              {{ servico.subtitulo }}
            </div>
          </div>

          <!-- Descrição -->
          <v-card-text class="pt-5 flex-grow-1 px-5">
            <p class="text-body-2 text-grey-darken-2 mb-4" style="line-height: 1.65">
              {{ servico.descricao }}
            </p>

            <v-divider class="mb-4 opacity-20"></v-divider>

            <!-- Tags de benefício -->
            <div class="d-flex flex-wrap gap-2">
              <v-chip
                v-for="(tag, j) in servico.tags"
                :key="j"
                :color="servico.chipColor"
                variant="tonal"
                size="small"
                label
                class="font-weight-medium"
              >
                <v-icon :icon="tag.icon" size="13" class="mr-1"></v-icon>
                {{ tag.label }}
              </v-chip>
            </div>
          </v-card-text>

          <v-divider class="mx-5 opacity-20"></v-divider>

          <!-- Indicador de nível -->
          <div class="px-5 pt-3 pb-1">
            <div class="d-flex justify-space-between align-center mb-1">
              <span class="text-caption text-grey-darken-1 font-weight-medium"
                >Nível de proteção</span
              >
              <span class="text-caption font-weight-bold" :style="{ color: servico.dotColor }">
                {{ servico.nivelLabel }}
              </span>
            </div>
            <v-progress-linear
              :model-value="servico.nivel"
              :color="servico.chipColor"
              bg-color="grey-lighten-3"
              height="6"
              rounded
            ></v-progress-linear>
          </div>

          <!-- Botão CTA -->
          <v-card-actions class="justify-center pa-5 pt-3">
            <v-btn
              :color="servico.chipColor"
              variant="flat"
              rounded="pill"
              block
              class="btn-servico font-weight-bold"
              :href="gerarLinkWhatsapp(servico.titulo)"
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
const telefone = '5516993741071'

const modelos = [
  { icon: 'mdi-home', label: 'Residencial' },
  { icon: 'mdi-office-building', label: 'Comercial' },
  { icon: 'mdi-hospital-building', label: 'Hospitalar' },
]

const servicos = [
  {
    titulo: 'Higienização',
    subtitulo: 'Limpeza Essencial',
    gradient: 'linear-gradient(135deg, #0D47A1 0%, #1565C0 100%)',
    dotColor: '#0D47A1',
    chipColor: 'primary',
    icon: 'mdi-air-filter',
    badge: null,
    nivel: 40,
    nivelLabel: 'Básico',
    descricao:
      'A limpeza essencial para o bom funcionamento do seu equipamento. Consiste na remoção de sujeiras visíveis, poeira, gordura e incrustações das peças internas (filtros, turbina e carenagem). Melhora o rendimento do aparelho e reduz o consumo de energia.',
    tags: [
      { icon: 'mdi-air-filter', label: 'Filtros' },
      { icon: 'mdi-lightning-bolt', label: 'Economia de energia' },
      { icon: 'mdi-cog', label: 'Rendimento' },
    ],
  },
  {
    titulo: 'Sanitização',
    subtitulo: 'Eliminação de microrganismos',
    gradient: 'linear-gradient(135deg, #1565C0 0%, #1976D2 100%)',
    dotColor: '#1976D2',
    chipColor: 'primary',
    icon: 'mdi-shield-check',
    badge: 'Mais pedido',
    badgeIcon: 'mdi-star',
    badgeColor: 'accent',
    featured: true,
    nivel: 70,
    nivelLabel: 'Avançado',
    descricao:
      'Um passo além da limpeza comum. Além de higienizar, aplicamos produtos saneantes específicos e homologados para eliminar 99,9% de bactérias, fungos e ácaros que se alojam nos dutos e serpentinas. Ideal para quem sofre com alergias e problemas respiratórios.',
    tags: [
      { icon: 'mdi-bacteria-outline', label: '99,9% bactérias' },
      { icon: 'mdi-leaf', label: 'Fungos e ácaros' },
      { icon: 'mdi-lungs', label: 'Saúde respiratória' },
    ],
  },
  {
    titulo: 'Esterilização',
    subtitulo: 'Biossegurança máxima',
    gradient: 'linear-gradient(135deg, #BF360C 0%, #E65100 100%)',
    dotColor: '#E65100',
    chipColor: 'accent',
    icon: 'mdi-star-circle',
    badge: 'Máxima proteção',
    badgeIcon: 'mdi-shield-star',
    badgeColor: 'error',
    nivel: 100,
    nivelLabel: 'Máximo',
    descricao:
      'O nível máximo de biossegurança para o seu ambiente. Através de processos químicos avançados ou tecnologia UV/Térmica, eliminamos completamente todos os microrganismos vivos, incluindo vírus e esporos resistentes. Recomendado para clínicas, hospitais ou locais com alto fluxo de pessoas.',
    tags: [
      { icon: 'mdi-virus-off', label: 'Vírus e esporos' },
      { icon: 'mdi-hospital-building', label: 'Clínicas e hospitais' },
      { icon: 'mdi-uv', label: 'Tecnologia UV/Térmica' },
    ],
  },
]

const gerarLinkWhatsapp = (nomeServico) => {
  const mensagem = encodeURIComponent(
    `Olá! Vi o site de vocês e gostaria de solicitar um orçamento para o serviço de *${nomeServico}*.`,
  )
  return `https://wa.me/${telefone}?text=${mensagem}`
}
</script>

<style scoped>
.servico-card {
  overflow: visible !important;
  position: relative;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  min-width: 280px;
}
.servico-card:hover {
  transform: translateY(-4px);
}
.featured-card {
  border: 2px solid rgb(var(--v-theme-primary)) !important;
}
@media (min-width: 1264px) {
  .featured-card {
    transform: translateY(-12px);
  }
  .featured-card:hover {
    transform: translateY(-18px);
  }
}
.badge-wrapper {
  position: absolute;
  top: -16px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
}
.card-header {
  border-radius: 12px 12px 0 0;
}
.header-icon-wrapper {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(4px);
}
.btn-servico {
  text-transform: none;
  letter-spacing: 0;
  font-size: 0.875rem !important;
}
.gap-2 {
  gap: 8px;
}
.tracking-wide {
  letter-spacing: 0.08em;
}
.opacity-80 {
  opacity: 0.8;
}
.opacity-20 {
  opacity: 0.2;
}

@media (max-width: 1263px) {
  .v-col {
    max-width: 480px;
    margin: 0 auto;
  }
}
</style>
