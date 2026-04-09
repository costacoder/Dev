<template>
  <section id="inicio" class="hero-section">
    <v-container class="fill-height">
      <v-row align="center">
        <v-col cols="12" md="8" lg="7" xl="6" class="content-box">
          <h1 class="text-h3 text-md-h2 font-weight-bold mb-4 text-white leading-tight">
            <span class="text-secondary-light">Ar-condicionado limpo</span> e gelando de verdade
          </h1>

          <p class="text-h6 mb-8 text-grey-lighten-2 font-weight-regular hero-description">
            Higienização técnica para sua casa ou empresa. Respire um ar mais puro e economize
            energia com quem entende do assunto.
          </p>

          <div class="d-flex flex-wrap gap-4 btn-wrapper">
            <v-btn
              color="primary"
              size="x-large"
              rounded="xl"
              prepend-icon="mdi-whatsapp"
              class="text-white px-10 elevation-8 btn-cta"
              href="https://wa.me/5516999999999"
              target="_blank"
            >
              Agendar Limpeza
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
.hero-section {
  /* Puxa a imagem para o topo absoluto, ignorando o espaço do header */
  margin-top: -88px;

  /* Garante que a imagem cubra a tela toda mesmo com o recuo acima */
  min-height: calc(100vh + 88px);

  /* Empurra o texto para baixo para ele não ficar "atrás" do header flutuante */
  padding-top: 120px;

  background:
    linear-gradient(135deg, rgba(26, 74, 124, 0.7), rgba(93, 158, 82, 0.6)),
    url('../assets/background-hero.jpg');

  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  color: white;
  transition: all 0.5s ease;
}

.leading-tight {
  line-height: 1.2 !important;
}

.hero-description {
  max-width: 550px;
  line-height: 1.6;
}

.text-secondary-light {
  color: #c8e6c9;
}

.btn-cta {
  font-weight: bold;
  letter-spacing: 0.5px;
  transition: transform 0.3s ease;
}

.btn-cta:hover {
  transform: translateY(-3px);
}

/* Ajustes para DESKTOP */
@media (min-width: 960px) {
  .hero-section {
    background-position: center 25%;
    padding-top: 100px;
  }
}

/* Ajustes para MOBILE */
@media (max-width: 600px) {
  .hero-section {
    /* No mobile, o recuo precisa ser maior para o título respirar */
    padding-top: 160px;
    text-align: left;
    background-position: center center;
  }

  .content-box {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .btn-wrapper {
    justify-content: flex-start;
  }

  /* Ajuste de tamanho da fonte mobile para não brigar com o header */
  .text-h3 {
    font-size: 2.1rem !important;
    line-height: 1.1 !important;
  }

  .hero-description {
    max-width: 100%;
    font-size: 1.1rem !important;
  }
}
</style>
