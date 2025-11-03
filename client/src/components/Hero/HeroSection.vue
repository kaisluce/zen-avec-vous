<template>
  <section class="hero">
    <div class="hero-visual">
      <div class="hero-video">
        <video autoplay loop muted playsinline>
          <source :src="heroVideo" type="video/mp4" />
          <div class="hero-fallback"></div>
        </video>
      </div>

      <div class="hero-overlay">
        <div class="hero-content">
          <div class="hero-logo">
            <img :src="logoBlanc" alt="Zen Avec Nous" />
          </div>

          <p class="hero-label">Confiance et bien-être</p>
          <h1 class="hero-title">Bienvenue chez Zen Avec Nous</h1>
          <router-link to="/nos-services" class="hero-cta">Découvrir nos services</router-link>

          <div class="hero-location">
            <svg class="location-icon" viewBox="0 0 384 512" width="20" height="20">
              <path d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z" fill="currentColor"/>
            </svg>
            <span>Val-de-Marne et les zones à proximité</span>
          </div>
        </div>
      </div>
    </div>

    <div class="hero-stats">
      <div class="container stats-container">
        <div class="stat-card">
          <div class="stat-icon">
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1-.25c1.27.42 2.63.65 4.02.65a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C12.85 21 3 11.15 3 1a1 1 0 0 1 1-1h3.51a1 1 0 0 1 1 1c0 1.39.23 2.75.65 4.02a1 1 0 0 1-.25 1L6.62 10.79z" fill="currentColor"/>
            </svg>
          </div>
          <div>
            <p class="stat-title">Obtenez un devis gratuit aujourd'hui</p>
            <p class="stat-value">09 82 67 32 32</p>
          </div>
        </div>

        <div class="stat-card">
          <div class="stat-icon">
            <svg viewBox="0 0 576 512" width="24" height="24">
              <path d="M316.5 18C311.3 7 299.8 0 288 0c-11.8 0-23.3 7-28.5 18L194.5 158.6 42.1 181.3c-12.2 1.8-22.4 10.3-26.2 22.1c-3.8 11.8-.7 24.9 8.1 33.6L129.9 343 103.6 499.1c-2.1 12.3 3 24.7 13.2 32.1c10.2 7.4 23.7 8.3 35 2.4L288 435l136.1 98.6c11.3 5.9 24.8 5 35-2.4c10.2-7.4 15.3-19.8 13.2-32.1L446.1 343 551.9 237c8.8-8.8 11.9-21.8 8.1-33.6c-3.8-11.8-14-20.3-26.2-22.1L381.5 158.6 316.5 18z" fill="currentColor"/>
            </svg>
          </div>
          <div>
            <p class="stat-title">Best ou vous en avez</p>
            <p class="stat-value">Service 5 étoiles</p>
          </div>
        </div>

        <div class="stat-card">
          <div class="stat-icon">
            <svg viewBox="0 0 512 512" width="24" height="24">
              <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 72l46.5 94 103.5 15-75 73 17.7 103L256 323.3 163.3 365l17.7-103-75-73 103.5-15L256 80z" fill="currentColor"/>
            </svg>
          </div>
          <div>
            <p class="stat-title">Années d'expérience</p>
            <p class="stat-value">5+ ans</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import heroVideo from '@/assets/06131.mp4'
import logoBlanc from '@/assets/logo-blanc.png'

export default {
  name: 'HeroSection',
  data() {
    return {
      heroVideo,
      logoBlanc
    }
  }
}
</script>

<style scoped>
.hero {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.hero-visual {
  position: relative;
  height: 100vh;
  min-height: 600px;
  overflow: hidden;
}

.hero-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.hero-video video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-fallback {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
}

.hero-overlay {
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.3);
}

.hero-content {
  text-align: center;
  color: white;
  max-width: 800px;
  padding: 2rem;
}

.hero-logo {
  margin-bottom: 2rem;
}

.hero-logo img {
  max-width: 100%;
  height: auto;
  max-height: 150px;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
}

.hero-label {
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 1rem;
  color: rgba(255, 255, 255, 0.85);
  font-weight: 600;
}

.hero-title {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  margin: 0 0 1.5rem 0;
  font-weight: 700;
  font-family: 'Archivo', sans-serif;
  color: var(--color-white);
}

.hero-cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: var(--color-primary);
  color: var(--color-white);
  font-weight: 600;
  padding: 0.85rem 2.5rem;
  border-radius: 999px;
  text-decoration: none;
  transition: background 0.3s ease, transform 0.3s ease;
  margin-bottom: 2.5rem;
}

.hero-cta:hover {
  background: var(--color-primary-dark);
  transform: translateY(-2px);
}

.hero-location {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 1.1rem;
  font-weight: 500;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 1rem 2rem;
  border-radius: 50px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  max-width: fit-content;
  margin: 0 auto;
}

.location-icon {
  color: white;
}

.hero-stats {
  position: relative;
  z-index: 1;
  padding: 2rem 0;
  background: var(--color-white);
}

.stats-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
  background: var(--color-white);
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
}

.stat-card {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.stat-icon {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: var(--color-light-pink);
  display: grid;
  place-items: center;
  color: var(--color-primary);
  flex-shrink: 0;
}

.stat-title {
  margin: 0 0 0.25rem 0;
  font-weight: 600;
  color: var(--color-dark);
  font-size: 1rem;
}

.stat-value {
  margin: 0;
  color: var(--color-text);
  font-size: 0.95rem;
}

/* Mobile Styles */
@media (max-width: 768px) {
  .hero-visual {
    height: 80vh;
    min-height: 500px;
  }

  .hero-content {
    padding: 1rem;
  }
  
  .hero-logo img {
    max-height: 100px;
  }

  .hero-cta {
    margin-bottom: 2rem;
  }
  
  .hero-location {
    font-size: 1rem;
    padding: 0.75rem 1.5rem;
  }

  .hero-stats {
    padding: 1.5rem 0;
  }

  .stats-container {
    padding: 1.5rem;
  }
}

@media (max-width: 480px) {
  .hero-visual {
    height: 70vh;
    min-height: 400px;
  }
  
  .hero-logo img {
    max-height: 80px;
  }
  
  .hero-location {
    font-size: 0.9rem;
    padding: 0.5rem 1rem;
    flex-direction: column;
    gap: 0.25rem;
  }

  .stats-container {
    grid-template-columns: 1fr;
    padding: 1.25rem;
  }
}
</style>
