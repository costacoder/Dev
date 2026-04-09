<template>
  <v-container id="servicos" class="py-16 section-servicos">
    <div class="text-center mb-12">
      <v-chip
        color="accent"
        variant="flat"
        size="small"
        label
        class="px-4 mb-3 font-weight-bold text-white text-uppercase elevation-2"
      >
        Por que limpar?
      </v-chip>
      <h2 class="text-h4 font-weight-bold text-primary">Um aparelho limpo faz diferença real</h2>
    </div>

    <v-row align="stretch">
      <v-col
        v-for="(item, i) in diferenciais"
        :key="i"
        cols="12"
        sm="6"
        md="6"
        lg="3"
        class="d-flex"
      >
        <v-card
          flat
          class="text-center pa-6 w-100 card-diferencial d-flex flex-column"
          rounded="xl"
        >
          <div class="icon-wrapper mx-auto mb-5">
            <v-icon :icon="item.icon" size="28" color="primary" />
          </div>

          <div class="stat-container mb-4">
            <div class="stat-number text-primary font-weight-bold mb-1">
              {{ item.stat }}
            </div>
            <div class="text-caption text-secondary stat-label">
              {{ item.statLabel }}
            </div>
          </div>

          <div class="text-subtitle-1 font-weight-bold text-primary mb-3">
            {{ item.title }}
          </div>

          <p class="text-body-2 text-grey-darken-1 texto-caixa flex-grow-1">
            {{ item.text }}
          </p>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const diferenciais = [
  {
    title: 'Saúde',
    icon: 'mdi-bacteria-outline',
    stat: '99%',
    statLabel: 'de fungos e bactérias eliminados',
    text: 'Ar contaminado agrava alergias e asma. A higienização técnica elimina microorganismos nocivos e protege efetivamente quem você ama.',
  },
  {
    title: 'Economia',
    icon: 'mdi-flash-outline',
    stat: '−30%',
    statLabel: 'no consumo de energia',
    text: 'Filtros sujos forçam o compressor ao máximo. Limpo, o aparelho atinge a temperatura desejada gastando significativamente menos energia.',
  },
  {
    title: 'Vida útil',
    icon: 'mdi-wrench-clock',
    stat: '2×',
    statLabel: 'mais durabilidade do aparelho',
    text: 'A oxidação e o acúmulo de resíduos são as principais causas de panes. A manutenção preventiva evita quebras e defeitos precoces.',
  },
  {
    title: 'Conforto',
    icon: 'mdi-snowflake',
    stat: '+40%',
    statLabel: 'de eficiência no resfriamento',
    text: 'Com as serpentinas limpas, o ar frio circula com muito mais velocidade e alcance, garantindo um ambiente gelado em poucos minutos.',
  },
]
</script>

<style scoped>
.section-servicos {
  scroll-margin-top: 90px;
}

.card-diferencial {
  border: 1px solid rgba(0, 0, 0, 0.07) !important;
  transition: all 0.3s ease;
  background-color: #ffffff !important;
}

.card-diferencial:hover {
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08) !important;
  transform: translateY(-6px);
  border-color: rgba(var(--v-theme-primary), 0.3) !important;
}

.icon-wrapper {
  width: 56px;
  height: 56px;
  border-radius: 16px;
  background: rgba(var(--v-theme-primary), 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Alinhamento dos títulos */
.stat-container {
  min-height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.stat-number {
  font-size: 2.2rem;
  line-height: 1;
  letter-spacing: -0.02em;
}

.stat-label {
  font-size: 0.72rem;
  line-height: 1.2;
  max-width: 140px;
  margin: 0 auto;
}

/* TEXTO EM CAIXA - Aplicado globalmente */
.texto-caixa {
  text-align: justify;
  text-justify: inter-word;
  /* Hifenização é CRUCIAL no mobile para o texto em caixa não criar buracos */
  hyphens: auto;
  -webkit-hyphens: auto;
  -ms-hyphens: auto;
  line-height: 1.6;
  word-break: break-word; /* Garante que palavras gigantes não estourem o card */
}

/* Ajustes de espaçamento para Tablet/Desktop Pequeno */
@media (min-width: 600px) and (max-width: 1142px) {
  .card-diferencial {
    padding: 32px !important;
  }
  .stat-container {
    min-height: 110px;
  }
}

/* No Mobile, apenas ajustamos as margens, mantendo o texto em caixa */
@media (max-width: 599px) {
  .stat-container {
    min-height: auto;
    margin-bottom: 16px;
  }
  .texto-caixa {
    padding: 0 4px; /* Pequeno respiro nas laterais internas */
  }
}
</style>
