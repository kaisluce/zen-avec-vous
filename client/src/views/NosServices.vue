<template>
  <div class="nos-services">
    <div class="page-header">
      <div class="container">
        <h1>Nos Services</h1>
        <p class="page-subtitle">Découvrez notre gamme complète de services personnalisés</p>
      </div>
    </div>
    
    <div class="page-content">
      <div class="container">
        <ServicesSection />
        
        <div class="services-overview">
          <h2>Pourquoi choisir Zen Avec Nous ?</h2>
          <div class="features-grid">
            <div class="feature-card">
              <div class="feature-icon">
                <svg viewBox="0 0 512 512" width="48" height="48">
                  <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" fill="currentColor"/>
                </svg>
              </div>
              <h3>Qualité garantie</h3>
              <p>Nos professionnels sont qualifiés et expérimentés pour vous offrir un service de qualité.</p>
            </div>
            
            <div class="feature-card">
              <div class="feature-icon">
                <svg viewBox="0 0 512 512" width="48" height="48">
                  <path d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0z" fill="currentColor"/>
                </svg>
              </div>
              <h3>Sécurité et confiance</h3>
              <p>Votre tranquillité d'esprit est notre priorité. Nous nous engageons à vous offrir des services sécurisés.</p>
            </div>
            
            <div class="feature-card">
              <div class="feature-icon">
                <svg viewBox="0 0 512 512" width="48" height="48">
                  <path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM160 368c0 8.8 7.2 16 16 16h160c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H176c-8.8 0-16 7.2-16 16v128zm16-144h160c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16H176c-8.8 0-16 7.2-16 16v128c0 8.8 7.2 16 16 16z" fill="currentColor"/>
                </svg>
              </div>
              <h3>Service personnalisé</h3>
              <p>Chaque service est adapté aux besoins spécifiques de votre famille et de votre situation.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ServicesSection from '@/components/Services/ServicesSection.vue'

export default {
  name: 'NosServices',
  components: {
    ServicesSection
  }
}
</script>

<style scoped>
.page-header {
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
  color: white;
  padding: 4rem 0;
  text-align: center;
}

.page-header h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: white;
}

.page-subtitle {
  font-size: 1.2rem;
  opacity: 0.9;
}

.page-content {
  padding: 4rem 0;
}

.services-overview {
  margin-top: 4rem;
}

.services-overview h2 {
  text-align: center;
  margin-bottom: 3rem;
  font-size: 2.5rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid var(--color-border);
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.feature-icon {
  width: 80px;
  height: 80px;
  background: var(--color-light-pink);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  color: var(--color-primary);
}

.feature-card h3 {
  margin-bottom: 1rem;
  color: var(--color-dark);
  font-size: 1.5rem;
}

.feature-card p {
  color: var(--color-text);
  line-height: 1.6;
}

@media (max-width: 768px) {
  .page-header h1 {
    font-size: 2.5rem;
  }
  
  .page-content {
    padding: 3rem 0;
  }
  
  .services-overview h2 {
    font-size: 2rem;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
  
  .feature-card {
    padding: 1.5rem;
  }
}
</style>
