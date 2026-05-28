<template>
  <v-container class="py-16" id="onde-atuamos">
    <!-- Cabeçalho -->
    <div class="text-center mb-12">
      <v-chip
        color="primary"
        variant="flat"
        size="small"
        label
        class="px-4 mb-3 font-weight-bold text-white text-uppercase elevation-2"
      >
        Referências
      </v-chip>
      <h2 class="text-h4 font-weight-bold mb-2 text-primary">Soluções para Todos os Ambientes</h2>
      <p class="text-grey-darken-1 mx-auto" style="max-width: 600px">
        Seja para o conforto da sua família ou para a infraestrutura da sua empresa, temos a equipe
        certa para o seu segmento.
      </p>
    </div>

    <v-row justify="center" align="stretch">
      <!-- Card Residencial -->
      <v-col cols="12" md="5" class="d-flex">
        <v-card class="pa-8 w-100 rounded-xl card-segmento" elevation="3">
          <div class="d-flex align-center mb-4">
            <v-avatar color="success" variant="tonal" size="56" class="mr-4">
              <v-icon icon="mdi-home-heart" size="28"></v-icon>
            </v-avatar>
            <div>
              <h3 class="text-h5 font-weight-bold text-primary">Segmento Residencial</h3>
              <span class="text-caption text-success font-weight-bold text-uppercase tracking-wider"
                >Conforto & Família</span
              >
            </div>
          </div>

          <p class="text-body-2 text-grey-darken-2 mb-6" style="line-height: 1.7">
            Atendimento personalizado para todos os tipos de casas, sobrados e apartamentos,
            garantindo o conforto térmico e, acima de tudo, a proteção da saúde da sua família.
          </p>

          <v-divider class="mb-4 opacity-20"></v-divider>

          <!-- Sub-lista de locais residenciais -->
          <div class="d-flex flex-wrap gap-2">
            <v-chip
              size="small"
              variant="outlined"
              color="grey-darken-1"
              v-for="item in locaisResidenciais"
              :key="item"
            >
              <v-icon icon="mdi-check-circle" size="14" color="success" class="mr-1"></v-icon>
              {{ item }}
            </v-chip>
          </div>
        </v-card>
      </v-col>

      <!-- Card Comercial/Empresarial -->
      <v-col cols="12" md="7" class="d-flex">
        <v-card class="pa-8 w-100 rounded-xl card-segmento border-primary-light" elevation="3">
          <div class="d-flex align-center mb-4">
            <v-avatar color="primary" variant="tonal" size="56" class="mr-4">
              <v-icon icon="mdi-office-building" size="28"></v-icon>
            </v-avatar>
            <div>
              <h3 class="text-h5 font-weight-bold text-primary">
                Segmento Empresarial e Comercial
              </h3>
              <span class="text-caption text-primary font-weight-bold text-uppercase tracking-wider"
                >Flexibilidade & Alta Demanda</span
              >
            </div>
          </div>

          <p class="text-body-2 text-grey-darken-2 mb-6" style="line-height: 1.7">
            Estrutura técnica completa para atender grandes demandas com flexibilidade total de
            horários (incluindo plantões noturnos ou aos finais de semana), evitando pausas no seu
            faturamento.
          </p>

          <v-divider class="mb-4 opacity-20"></v-divider>

          <!-- Grid de sub-locais comerciais com ícones dedicados -->
          <v-row dense>
            <v-col cols="6" sm="4" v-for="(comercio, idx) in locaisComerciais" :key="idx">
              <div class="d-flex align-center pa-2 item-comercio rounded-lg">
                <v-icon :icon="comercio.icon" size="18" color="primary" class="mr-2"></v-icon>
                <span class="text-caption font-weight-medium text-grey-darken-3">{{
                  comercio.nome
                }}</span>
              </div>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const locaisResidenciais = ['Casas', 'Sobrados', 'Apartamentos', 'Varandas Gourmet']

const locaisComerciais = [
  { nome: 'Lojas de Shopping', icon: 'mdi-shopping' },
  { nome: 'Escritórios', icon: 'mdi-briefcase-outline' },
  { nome: 'Redes de Academias', icon: 'mdi-dumbbell' },
  { nome: 'Restaurantes', icon: 'mdi-silverware-fork-knife' },
  { nome: 'Agências Bancárias', icon: 'mdi-bank' },
  { nome: 'Clínicas Médicas', icon: 'mdi-doctor' },
  { nome: 'Indústrias', icon: 'mdi-factory' },
  { nome: 'Empresas / Corporativo', icon: 'mdi-domain' },
]
</script>

<style scoped>
.card-segmento {
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  background: #ffffff;
}
.card-segmento:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08) !important;
}
.border-primary-light {
  border: 1px solid rgba(13, 71, 161, 0.1) !important;
}
.item-comercio {
  background: rgba(0, 0, 0, 0.02);
  transition: background 0.2s ease;
}
.item-comercio:hover {
  background: rgba(13, 71, 161, 0.05);
}
.gap-2 {
  gap: 8px;
}
.tracking-wider {
  letter-spacing: 0.08em;
}
</style>
