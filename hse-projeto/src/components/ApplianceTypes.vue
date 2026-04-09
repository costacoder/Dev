<template>
  <v-sheet color="primary" class="py-8">
    <v-container class="text-center">
      <p
        class="text-white text-caption text-uppercase font-weight-bold opacity-70 mb-4 letter-wide"
      >
        Modelos atendidos
      </p>
      <div class="d-flex flex-wrap justify-center gap-chips">
        <div v-for="tipo in tipos" :key="tipo" class="tipo-pill">
          {{ tipo }}
        </div>
      </div>
    </v-container>
  </v-sheet>
</template>

<script setup>
const tipos = ['Split Hi-Wall', 'Janela', 'Cassete', 'Piso Teto', 'VRF / Central']
</script>

<style scoped>
.gap-chips {
  gap: 12px;
}

.tipo-pill {
  background: rgba(255, 255, 255, 0.12);
  color: white;
  font-size: 0.85rem;
  font-weight: 500;
  padding: 8px 20px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.25);
}

.letter-wide {
  letter-spacing: 0.1em;
}
</style>
