<template>
  <v-container class="py-16 bg-grey-lighten-4" fluid>
    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="12" md="5" class="d-flex justify-center pa-6 pa-md-10">
          <div class="specialist-wrapper">
            <div class="photo-card elevation-12">
              <v-img :src="fotoOtavio" alt="Otavio - Especialista HSE" cover class="photo-img">
                <template v-slot:placeholder>
                  <v-row class="fill-height ma-0" align="center" justify="center">
                    <v-progress-circular indeterminate color="primary"></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
            </div>

            <div class="specialist-label elevation-6">
              <v-icon icon="mdi-check-decagram" size="18" class="mr-2"></v-icon>
              <span>ESPECIALISTA RESPONSÁVEL</span>
            </div>
          </div>
        </v-col>

        <v-col cols="12" md="7" class="text-center text-md-left">
          <h2 class="text-h3 font-weight-bold mb-4 text-primary headline-otavio">Otávio</h2>

          <p
            class="text-body-1 text-grey-darken-1 lh-relaxed mx-auto mx-md-0 text-justify"
            style="max-width: 600px"
          >
            Na HSE, garantimos que cada componente do seu aparelho receba o tratamento correto.
            Nosso compromisso é entregar um serviço limpo, seguro e honesto. É a certeza de colocar
            alguém de confiança para cuidar do ar que você respira.
          </p>

          <v-divider class="d-md-none mt-10 w-25 mx-auto" color="accent" thickness="3"></v-divider>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script setup>
import fotoOtavio from '../assets/otavio.jpg'
</script>

<style scoped>
.specialist-wrapper {
  position: relative;
  display: inline-block;
  padding-bottom: 20px;
}

.photo-card {
  width: 260px;
  height: 320px;
  border-radius: 32px;
  overflow: hidden;
  border: 6px solid #ffffff;
  background: #e0e0e0;
  position: relative;
  z-index: 1;
}

.photo-img {
  width: 100%;
  height: 100%;
  display: block;
}

.specialist-label {
  position: absolute;
  bottom: 5px;
  right: -25px;
  background: rgb(var(--v-theme-accent)) !important;
  color: white !important;
  padding: 12px 20px;
  border-radius: 16px;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  border: 4px solid #ffffff;
  white-space: nowrap;
  z-index: 2;
}

.headline-otavio {
  letter-spacing: -1px;
}

.lh-relaxed {
  line-height: 1.8 !important;
}

/* Ajuste específico para garantir que o justificado fique bonito */
.text-justify {
  text-align: justify !important;
  text-justify: inter-word; /* Melhora o espaçamento entre as palavras no bloco */
}

@media (max-width: 600px) {
  .photo-card {
    width: 220px;
    height: 270px;
    border-radius: 28px;
  }

  .specialist-label {
    right: 50%;
    transform: translateX(50%);
    bottom: -10px;
    font-size: 10px;
    padding: 10px 16px;
  }

  /* No mobile, o justificado às vezes fica estranho. 
     Se preferir centralizado apenas no celular, mude para 'text-center' */
  .text-justify {
    text-align: justify !important;
  }
}
</style>
