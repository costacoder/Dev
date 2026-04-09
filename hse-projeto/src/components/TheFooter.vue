<template>
  <v-footer class="bg-grey-darken-4 text-center d-flex flex-column pa-10">
    <div class="mb-5 d-flex justify-center">
      <v-img
        src="@/assets/logo-header.png"
        alt="Logo HSE Climatização"
        contain
        class="logo-footer"
      ></v-img>
    </div>

    <div class="text-caption text-grey-lighten-1">Atendimento em: Ribeirão Preto e Região</div>
    <v-divider class="my-5 w-100 border-opacity-25"></v-divider>
    <div class="text-caption text-grey-lighten-2">
      © {{ new Date().getFullYear() }} — Todos os direitos reservados
    </div>
  </v-footer>
</template>

<style scoped>
/* Estilização para o Logo no Rodapé */
.logo-footer {
  width: 180px !important; /* Tamanho controlado para o rodapé */
  max-height: 80px;

  filter: brightness(0) invert(1);

  /* Leve transparência para não ficar agressivo */
  opacity: 0.8;
  transition: opacity 0.3s ease;
}

/* Efeito ao passar o mouse (opcional) */
.logo-footer:hover {
  opacity: 1;
}
</style>
