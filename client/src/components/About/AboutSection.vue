<template>
  <section class="about">
    <div class="container">
      <div class="about-content">
        <div class="about-image">
          <img 
            :src="aboutImage" 
            alt="À propos de Zen Avec Nous" 
            loading="lazy"
          />
        </div>
        
        <div class="about-text">
          <div class="about-header">
            <p class="about-prefix">découvrez notre histoire</p>
            <h2 class="about-title">A propos de nous</h2>
          </div>
          
          <p class="about-description">
            Zen Avec Nous est une entreprise spécialisée dans l'aide à domicile pour les personnes âgées et/ou dépendantes, 
            ainsi que dans les services de nettoyage. Nous nous engageons à vous offrir des services de qualité et à vous 
            garantir la tranquillité d'esprit.
          </p>
          
          <div class="about-features">
            <div class="feature-item">
              <div class="feature-icon">
                <svg viewBox="0 0 512 512" width="24" height="24">
                  <path d="M18.92 351.2l108.5-46.52c12.78-5.531 27.77-1.801 36.45 8.98l44.09 53.82c69.25-34 125.5-90.31 159.5-159.5l-53.81-44.04c-10.75-8.781-14.41-23.69-8.974-36.47l46.51-108.5c6.094-13.91 21.1-21.52 35.79-18.11l100.8 23.25c14.25 3.25 24.22 15.8 24.22 30.46c0 252.3-205.2 457.5-457.5 457.5c-14.67 0-27.18-9.968-30.45-24.22l-23.25-100.8C-2.571 372.4 5.018 357.2 18.92 351.2z" fill="currentColor"/>
                </svg>
              </div>
              <div class="feature-content">
                <h6 class="feature-title">Lundi au Vendredi de 8h à 19h</h6>
                <p class="feature-text"><strong>+33 9 82 67 32 32</strong></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import aboutImage from '@/assets/pexels-photo-7551583.jpeg'

export default {
  name: 'AboutSection',
  data() {
    return {
      aboutImage
    }
  }
}
</script>

<style scoped>
.about {
  padding: 4rem 0;
  background-color: var(--color-white);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.about-image {
  position: relative;
}

.about-image img {
  width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
}

.about-text {
  padding-left: 2rem;
}

.about-header {
  margin-bottom: 1.5rem;
}

.about-prefix {
  color: var(--color-primary);
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 0.5rem;
}

.about-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-dark);
  margin: 0;
  font-family: 'Archivo', sans-serif;
}

.about-description {
  font-size: 1.1rem;
  color: var(--color-text);
  line-height: 1.7;
  margin-bottom: 2rem;
}

.about-features {
  margin-top: 2rem;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: var(--color-light-pink);
  border-radius: 8px;
  border-left: 4px solid var(--color-primary);
}

.feature-icon {
  color: var(--color-primary);
  flex-shrink: 0;
}

.feature-content {
  flex: 1;
}

.feature-title {
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-dark);
  margin: 0 0 0.5rem 0;
}

.feature-text {
  font-size: 1.1rem;
  color: var(--color-text);
  margin: 0;
}

/* Mobile Styles */
@media (max-width: 768px) {
  .about {
    padding: 3rem 0;
  }
  
  .container {
    padding: 0 1rem;
  }
  
  .about-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .about-text {
    padding-left: 0;
  }
  
  .about-title {
    font-size: 2rem;
  }
  
  .about-description {
    font-size: 1rem;
  }
  
  .feature-item {
    padding: 1rem;
  }
}

@media (max-width: 480px) {
  .about {
    padding: 2rem 0;
  }
  
  .about-title {
    font-size: 1.75rem;
  }
  
  .about-description {
    font-size: 0.95rem;
  }
  
  .feature-item {
    flex-direction: column;
    text-align: center;
    gap: 0.5rem;
  }
}
</style>
