<template>
  <div class="home">
    <HeroSection />
    
    <section class="intro-section">
      <div class="container">
        <div class="intro-content">
          <h2 class="intro-title">Un service sur mesure pour toute la famille de 6 à 99 ans</h2>
          <p class="intro-subtitle"><strong>Des enfants aux parents jusqu'aux séniors et plus encore</strong></p>
          <p class="intro-description">
            Dans un monde où les besoins évoluent constamment, il est essentiel de trouver des services qui répondent à chaque membre de la famille, 
            quel que soit son âge. C'est précisément ce que nous offrons : un service sur mesure pour toute la famille, de 6 à 99 ans.
          </p>
        </div>
      </div>
    </section>
    
    <ServicesSection />
    <AboutSection />
    <ContactForm />
  </div>
</template>

<script>
import HeroSection from '@/components/Hero/HeroSection.vue'
import ServicesSection from '@/components/Services/ServicesSection.vue'
import AboutSection from '@/components/About/AboutSection.vue'
import ContactForm from '@/components/Contact/ContactForm.vue'

export default {
  name: 'Home',
  components: {
    HeroSection,
    ServicesSection,
    AboutSection,
    ContactForm
  }
}
</script>

<style scoped>
.home {
  min-height: 100vh;
}

.intro-section {
  padding: 4rem 0;
  background-color: var(--color-white);
}

.intro-content {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.intro-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-dark);
  margin-bottom: 1rem;
  font-family: 'Archivo', sans-serif;
}

.intro-subtitle {
  font-size: 1.2rem;
  color: var(--color-text);
  margin-bottom: 1.5rem;
  font-weight: 600;
}

.intro-description {
  font-size: 1.1rem;
  color: var(--color-text);
  line-height: 1.7;
}

/* Mobile Styles */
@media (max-width: 768px) {
  .intro-section {
    padding: 3rem 0;
  }
  
  .intro-title {
    font-size: 2rem;
  }
  
  .intro-subtitle {
    font-size: 1.1rem;
  }
  
  .intro-description {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .intro-section {
    padding: 2rem 0;
  }
  
  .intro-title {
    font-size: 1.75rem;
  }
  
  .intro-subtitle {
    font-size: 1rem;
  }
  
  .intro-description {
    font-size: 0.95rem;
  }
}
</style>