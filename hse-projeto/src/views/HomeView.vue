<script setup>
import HeroSection from '@/components/HeroSection.vue'

// 1. Serviços Oferecidos
import ServiceCards from '@/components/ServiceCards.vue'

// 2. Porque contratar
import WhyHire from '@/components/WhyHire.vue'

// 3. Porque HSE
import HseMeaning from '@/components/HseMeaning.vue'

// 4. Referências (Antigo item 5)
import CompanyReferences from '@/components/CompanyReferences.vue'

// 5. Sobre empresa (Antigo item 6)
import AboutCompany from '@/components/AboutCompany.vue'

// 6. Sobre pessoas (Antigo item 7)
import AboutTeam from '@/components/AboutTeam.vue'
</script>

<template>
  <div>
    <!-- Topo do Site -->
    <HeroSection />

    <!-- 1. Serviços Oferecidos -->
    <ServiceCards id="servicos" />

    <!-- 2. Porque contratar -->
    <WhyHire id="porque-contratar" />

    <!-- 3. Porque HSE -->
    <HseMeaning id="porque-hse" />

    <!-- 4. Referências -->
    <CompanyReferences id="referencias" />

    <!-- 5. Sobre empresa -->
    <AboutCompany id="sobre-empresa" />

    <!-- 6. Sobre pessoas -->
    <AboutTeam id="sobre-pessoas" />
  </div>
</template>
