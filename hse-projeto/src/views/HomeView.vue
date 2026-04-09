<script setup>
import HeroSection from '@/components/HeroSection.vue'
import FeaturesEdu from '@/components/FeaturesEdu.vue'
import ServiceCards from '@/components/ServiceCards.vue'
import ApplianceTypes from '@/components/ApplianceTypes.vue'
import AboutProfessional from '@/components/AboutProfessional.vue'
</script>

<template>
  <div>
    <HeroSection />
    <FeaturesEdu id="educacao" /> <ServiceCards id="planos" /> <ApplianceTypes id="aparelhos" />
    <AboutProfessional id="profissional" />
  </div>
</template>
