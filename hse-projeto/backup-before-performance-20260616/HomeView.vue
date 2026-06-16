<script setup>
import HeroSection from '@/components/HeroSection.vue'
// 1. Porque contratar
import WhyHire from '@/components/WhyHire.vue'

// 2. Porque HSE
import HseMeaning from '@/components/HseMeaning.vue'

// 3. Referências
import CompanyReferences from '@/components/CompanyReferences.vue'

// 4. Sobre empresa
import AboutCompany from '@/components/AboutCompany.vue'
</script>

<template>
  <div>
    <!-- Topo do Site -->
    <HeroSection />

    <!-- 1. Porque contratar -->
    <WhyHire id="porque-contratar" />

    <!-- 2. Porque HSE -->
    <HseMeaning id="porque-hse" />

    <!-- 3. Referências -->
    <CompanyReferences id="referencias" />

    <!-- 4. Sobre empresa -->
    <AboutCompany id="sobre-empresa" />
  </div>
</template>
