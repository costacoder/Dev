<template>
  <section class="sobre-section py-16" id="sobre-nos">
    <v-container>
      <v-row align="center" justify="center">
        <!-- Coluna de Apresentação -->
        <v-col cols="12" md="6" class="pr-md-10">
          <div class="text-center text-md-left">
            <v-chip
              color="accent"
              variant="flat"
              size="small"
              label
              class="px-4 mb-4 font-weight-bold text-white text-uppercase elevation-2"
            >
              Sobre a Empresa
            </v-chip>
          </div>

          <h2 class="text-h4 font-weight-bold mb-5 heading-color" style="line-height: 1.25">
            Décadas de Experiência e Transparência
          </h2>

          <p class="text-body-1 mb-4 body-color" style="line-height: 1.75">
            A HSE nasceu da união de profissionais que atuam no segmento de climatização há décadas.
            Ao longo da nossa trajetória, consolidamos uma marca pautada na honestidade,
            transparência e rigor técnico.
          </p>

          <p class="text-body-1 mb-6 body-color" style="line-height: 1.75">
            Mais do que limpar aparelhos de ar-condicionado, a nossa verdadeira missão é
            <strong class="heading-color">cuidar do invisível</strong>. Trabalhamos diariamente para
            que o ar que você, sua família, seus colaboradores e seus clientes respiram seja
            genuinamente saudável — seja no aconchego do seu lar ou nos lugares que você frequenta.
          </p>

          <!-- Selos de confiança -->
          <div class="d-flex flex-column trust-list">
            <div v-for="selo in selos" :key="selo.texto" class="d-flex align-center trust-item">
              <v-avatar :color="selo.color" size="38" class="mr-3 flex-shrink-0">
                <v-icon :icon="selo.icon" size="19" color="white"></v-icon>
              </v-avatar>
              <span class="text-body-2 font-weight-bold selo-text">{{ selo.texto }}</span>
            </div>
          </div>
        </v-col>

        <!-- Coluna dos stats / card de destaque -->
        <v-col cols="12" md="6" class="mt-10 mt-md-0">
          <v-card class="card-missao rounded-xl position-relative overflow-hidden" elevation="6">
            <!-- Barra lateral de destaque -->
            <div class="side-bar" aria-hidden="true"></div>

            <!-- Aspas decorativas de fundo -->
            <v-icon icon="mdi-format-quote-open" class="icon-quote-bg" aria-hidden="true"></v-icon>

            <div class="pa-8 pl-10">
              <span
                class="text-caption font-weight-bold text-uppercase text-accent d-block mb-2"
                style="letter-spacing: 0.1em"
              >
                Nossa Verdadeira Missão
              </span>

              <h3 class="text-h5 font-weight-bold text-primary mb-4">Cuidar do Invisível</h3>

              <p class="text-body-2 text-grey-darken-2 mb-0" style="line-height: 1.85">
                Trabalhamos diariamente para que o ar que você, sua família, seus colaboradores e
                seus clientes respiram seja genuinamente saudável — seja no aconchego do seu lar ou
                nos lugares que você frequenta.
              </p>

              <v-divider class="my-6" style="opacity: 0.15"></v-divider>

              <!-- Stats -->
              <v-row no-gutters class="stats-row">
                <v-col
                  v-for="stat in stats"
                  :key="stat.label"
                  cols="4"
                  class="text-center stat-col"
                >
                  <div class="text-h4 font-weight-black" :class="stat.colorClass">
                    {{ stat.value }}
                  </div>
                  <div
                    class="text-caption font-weight-bold text-grey-darken-1 text-uppercase mt-1"
                    style="line-height: 1.2; font-size: 0.65rem !important"
                  >
                    {{ stat.label }}
                  </div>
                </v-col>
              </v-row>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
const selos = [
  { icon: 'mdi-handshake', color: 'primary', texto: 'Atuação Pautada na Honestidade' },
  { icon: 'mdi-eye-check', color: 'accent', texto: 'Transparência Total com o Cliente' },
  { icon: 'mdi-check-decagram', color: 'success', texto: 'Rigor Técnico em Cada Detalhe' },
]

const stats = [
  { value: '20+', label: 'Anos no Mercado', colorClass: 'text-primary' },
  { value: '99%', label: 'Clientes Satisfeitos', colorClass: 'text-accent' },
  { value: '100%', label: 'Ar Saudável', colorClass: 'text-success' },
]
</script>

<style scoped>
/* ── Fundo da seção: cor fixa por tema ── */
.sobre-section {
  position: relative;
  background: #5f7c50;
}

:global(.v-theme--dark) .sobre-section {
  background: #d4dfce;
}

/* ── Card de missão ── */
.card-missao {
  background: rgb(var(--v-theme-surface));
  border: 1px solid rgba(var(--v-theme-primary), 0.12);
}

.side-bar {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 5px;
  background: linear-gradient(
    180deg,
    rgb(var(--v-theme-primary)) 0%,
    rgb(var(--v-theme-accent)) 100%
  );
  border-radius: 12px 0 0 12px;
}

.icon-quote-bg {
  position: absolute;
  right: -12px;
  top: -12px;
  font-size: 130px !important;
  color: rgba(var(--v-theme-primary), 0.04);
  pointer-events: none;
}

/* ── Cores de texto adaptáveis ao fundo verde ── */
.heading-color {
  color: #ffffff;
}
.body-color {
  color: rgba(255, 255, 255, 0.88);
}
.selo-text {
  color: rgba(255, 255, 255, 0.9);
}

:global(.v-theme--dark) .heading-color {
  color: #1a2e14;
}
:global(.v-theme--dark) .body-color {
  color: rgba(26, 46, 20, 0.82);
}
:global(.v-theme--dark) .selo-text {
  color: rgba(26, 46, 20, 0.85);
}

/* ── Lista de selos ── */
.trust-list {
  gap: 14px;
}
.trust-item {
  gap: 0;
}

/* ── Stats ── */
.stats-row {
  gap: 0;
}
.stat-col {
  padding: 8px 4px;
}
.stat-col + .stat-col {
  border-left: 1px solid rgba(var(--v-border-color), 0.15);
}
</style>
