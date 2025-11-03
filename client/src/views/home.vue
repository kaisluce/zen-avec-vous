<template>
  <div class="home">
    <HeroSection />
    <HomeAboutPreview />
    <ServicesSection />
    <ServiceShowcase />
    <CtaSection
      label="Contactez-nous pour plus d'informations"
      title="Contactez-nous pour plus d’informations"
      button-text="Découvrir nos services"
      button-to="/nos-services"
      phone-prompt="Ou appelez-nous : "
    />
    <CommitmentsSection />
    <TestimonialsSection />
    <ContactForm />
  </div>
</template>

<script>
import HeroSection from '@/components/Hero/HeroSection.vue'
import ServicesSection from '@/components/Services/ServicesSection.vue'
import HomeAboutPreview from '@/components/home/HomeAboutPreview.vue'
import ServiceShowcase from '@/components/home/ServiceShowcase.vue'
import CommitmentsSection from '@/components/home/CommitmentsSection.vue'
import TestimonialsSection from '@/components/home/TestimonialsSection.vue'
import CtaSection from '@/components/All/cta.vue'
import ContactForm from '@/components/Contact/ContactForm.vue'

export default {
  name: 'Home',
  components: {
    HeroSection,
    ServicesSection,
    HomeAboutPreview,
    ServiceShowcase,
    CommitmentsSection,
    TestimonialsSection,
    CtaSection,
    ContactForm
  }
}
</script>

<style scoped>
.home {
  min-height: 100vh;
}

.hero-followup {
  margin-top: 2rem;
}
</style>
