<template>
  <v-container class="py-16" id="porque-hse">
    <v-row justify="center" class="mb-12">
      <v-col cols="12" md="10" class="text-center">
        <v-chip
          color="accent"
          variant="flat"
          size="small"
          label
          class="px-4 mb-3 font-weight-bold text-white text-uppercase elevation-2"
        >
          Nossa Identidade
        </v-chip>
        <h2 class="text-h4 font-weight-bold text-primary mb-3">Por que a HSE?</h2>
        <p class="text-body-2 text-grey-darken-1 mx-auto" style="max-width: 750px">
          Mais do que um nome, nossa marca carrega o compromisso global com as melhores práticas de
          <strong class="text-primary">Health, Safety and Environment</strong> (Saúde, Segurança e
          Meio Ambiente).
        </p>
      </v-col>
    </v-row>

    <v-row justify="center" class="mb-16">
      <v-col v-for="(letra, i) in sigla" :key="i" cols="12" sm="4" class="text-center">
        <v-card variant="tonal" :color="letra.color" class="pa-6 rounded-xl border-light h-100">
          <div class="text-h1 font-weight-black mb-2 opacity-20 style-letter">
            {{ letra.caracter }}
          </div>
          <div class="text-h5 font-weight-bold mb-2 tracking-wide text-uppercase">
            {{ letra.traducao }}
          </div>
          <div class="text-caption font-weight-medium text-grey-darken-2">
            {{ letra.conceito }}
          </div>
        </v-card>
      </v-col>
    </v-row>

    <v-divider class="my-8 opacity-20"></v-divider>

    <v-row justify="center" class="mt-8">
      <v-col cols="12" class="text-center mb-6">
        <h3 class="text-h5 font-weight-bold text-primary">
          Compromisso Técnico e Responsabilidade
        </h3>
        <p class="text-body-2 text-grey-darken-1">
          Escolher a HSE é garantir a tranquilidade de quem entende do assunto.
        </p>
      </v-col>

      <v-col v-for="(pilar, idx) in pilares" :key="idx" cols="12" md="4">
        <div class="d-flex align-start pa-2">
          <v-avatar color="primary" size="40" class="mr-4 mt-1 elevation-2">
            <v-icon :icon="pilar.icon" color="white" size="20"></v-icon>
          </v-avatar>
          <div>
            <h4 class="text-subtitle-1 font-weight-bold text-primary mb-1">
              {{ pilar.titulo }}
            </h4>
            <p class="text-body-2 text-grey-darken-2 style-desc">
              {{ pilar.descricao }}
            </p>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const sigla = [
  {
    caracter: 'H',
    traducao: 'Health / Saúde',
    color: 'success',
    conceito:
      'Proteção biológica absoluta do ar contra vírus, fungos e colônias de bactérias nocivas.',
  },
  {
    caracter: 'S',
    traducao: 'Safety / Segurança',
    color: 'primary',
    colorHex: '#0D47A1',
    conceito:
      'Processos padronizados, técnicos qualificados e total conformidade com as leis vigentes.',
  },
  {
    caracter: 'E',
    traducao: 'Environment / Meio Ambiente',
    color: 'accent',
    conceito:
      'Uso exclusivo de produtos biodegradáveis homologados e foco em eficiência energética.',
  },
]

const pilares = [
  {
    icon: 'mdi-account-hard-hat',
    titulo: 'Equipe Qualificada e Experiente',
    descricao:
      'Nossos técnicos passam por treinamentos rigorosos e dominam perfeitamente as melhores práticas do segmento de climatização.',
  },
  {
    icon: 'mdi-file-certificate',
    titulo: 'Responsabilidade Técnico',
    descricao:
      'Atuamos em total conformidade com as normas da ANVISA e legislações vigentes, emitindo laudos e ARTs sempre que necessário.',
  },
  {
    icon: 'mdi-wrench-cog', // Ícone atualizado para garantir compatibilidade total e visual técnico
    titulo: 'Tecnologia e Segurança',
    descricao:
      'Utilizamos apenas produtos regulamentados e ferramentas de ponta para garantir a eficácia sem agredir sua saúde ou o ambiente.',
  },
]
</script>

<style scoped>
.style-letter {
  line-height: 1 !important;
  font-family: 'Montserrat', sans-serif !important;
}
.border-light {
  border: 1px solid rgba(0, 0, 0, 0.03) !important;
}
.style-desc {
  line-height: 1.6;
}
.tracking-wide {
  letter-spacing: 0.05em;
}
</style>
