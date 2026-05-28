<template>
  <v-container class="py-16" id="porque-contratar">
    <!-- Cabeçalho da Seção -->
    <div class="text-center mb-12">
      <v-chip
        color="primary"
        variant="flat"
        size="small"
        label
        class="px-4 mb-3 font-weight-bold text-white text-uppercase elevation-2"
      >
        Por que Contratar?
      </v-chip>
      <h2 class="text-h4 font-weight-bold mb-2 text-primary">
        Sua Saúde e Seu Patrimônio em Primeiro Lugar
      </h2>
      <p class="text-grey-darken-1 mx-auto max-width-text">
        Viver e trabalhar em um ambiente climatizado não deve ser um risco para a sua saúde. Manter
        o seu ar-condicionado devidamente tratado traz benefícios imediatos:
      </p>
    </div>

    <!-- Os 3 Benefícios Principais -->
    <v-row justify="center" align="stretch">
      <v-col v-for="(beneficio, i) in beneficios" :key="i" cols="12" md="4" class="d-flex">
        <v-card class="pa-6 w-100 card-beneficio" elevation="2" rounded="xl">
          <v-avatar :color="beneficio.color" variant="tonal" size="56" class="mb-4">
            <v-icon :icon="beneficio.icon" size="26"></v-icon>
          </v-avatar>
          <h3 class="text-h6 font-weight-bold text-primary mb-2">
            {{ beneficio.titulo }}
          </h3>
          <p class="text-body-2 text-grey-darken-2 mb-0" style="line-height: 1.6">
            {{ beneficio.descricao }}
          </p>
        </v-card>
      </v-col>
    </v-row>

    <!-- Super Bloco de Destaque: O PMOC -->
    <v-row justify="center" class="mt-12">
      <v-col cols="12" md="12">
        <v-card
          theme="dark"
          color="primary"
          class="pa-8 rounded-xl position-relative overflow-hidden card-pmoc elevation-6"
        >
          <!-- Fundo decorativo sutil -->
          <div class="bg-decorativo"></div>

          <v-row align="center" class="position-relative">
            <v-col cols="12" lg="8">
              <div class="d-flex align-center mb-3 flex-wrap gap-2">
                <v-icon icon="mdi-gavel" color="accent" size="28" class="mr-2"></v-icon>
                <h3 class="text-h5 font-weight-bold text-white">
                  Climatização é Coisa Séria: Conheça a Lei do PMOC
                </h3>
              </div>
              <p class="text-body-2 text-blue-lighten-4 mb-0" style="line-height: 1.7">
                Você sabia que a qualidade do ar em ambientes coletivos é protegida por lei? Locais
                públicos e privados de uso coletivo são obrigados a possuir o
                <strong>PMOC (Plano de Manutenção, Operação e Controle)</strong>. Estar em dia com o
                PMOC não é apenas evitar multas pesadas, mas garantir legalmente um ambiente seguro
                contra a proliferação de doenças e a <em>síndrome do edifício doente</em>.
              </p>
            </v-col>

            <v-col cols="12" lg="4" class="text-center text-lg-right">
              <v-btn
                color="accent"
                variant="flat"
                size="large"
                rounded="pill"
                class="font-weight-bold text-white px-6 btn-pmoc"
                href="https://wa.me/5516993741071?text=Olá! Gostaria de entender melhor sobre a implantação do PMOC na minha empresa."
                target="_blank"
                prepend-icon="mdi-whatsapp"
              >
                Adequar minha empresa
              </v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const beneficios = [
  {
    icon: 'mdi-lungs',
    color: 'success',
    titulo: 'Saúde Respiratória',
    descricao:
      'Prevenção de crises de asma, rinite, sinusite e outras doenças transmitidas pelas vias aéreas através da eliminação de patógenos.',
  },
  {
    icon: 'mdi-office-building-cog', // Ícone atualizado para carregar perfeitamente
    color: 'primary',
    titulo: 'Conservação do Patrimônio',
    descricao:
      'Equipamentos limpos trabalham livres de sobrecarga, reduzindo drasticamente gastos com manutenção corretiva e aumentando a vida útil.',
  },
  {
    icon: 'mdi-flash',
    color: 'accent',
    titulo: 'Economia de Energia',
    descricao:
      'O acúmulo de sujeira faz o motor trabalhar o dobro. A manutenção preventiva reduz severamente a conta de luz no fim do mês.',
  },
]
</script>

<style scoped>
.max-width-text {
  max-width: 700px;
}
.card-beneficio {
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.04) !important;
}
.card-beneficio:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08) !important;
}
.card-pmoc {
  background: linear-gradient(135deg, #0d47a1 0%, #0a367c 100%) !important;
}
.bg-decorativo {
  position: absolute;
  top: -50%;
  right: -20%;
  width: 300px;
  height: 300px;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 50%;
  pointer-events: none;
}
.btn-pmoc {
  text-transform: none;
  letter-spacing: 0;
}
.gap-2 {
  gap: 8px;
}
</style>
