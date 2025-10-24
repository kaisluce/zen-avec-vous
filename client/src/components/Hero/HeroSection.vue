<template>
  <section class="hero">
    <div class="hero-video">
      <video autoplay loop muted playsinline>
        <source :src="heroVideo" type="video/mp4" />
        <!-- Fallback for browsers that don't support video -->
        <div class="hero-fallback"></div>
      </video>
    </div>
    
    <div class="hero-overlay">
      <div class="hero-content">
        <div class="hero-logo">
          <img :src="logoBlanc" alt="Zen Avec Nous" />
        </div>
        
        <div class="hero-location">
          <svg class="location-icon" viewBox="0 0 384 512" width="20" height="20">
            <path d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z" fill="currentColor"/>
          </svg>
          <span>Val-de-Marne et les zones à proximité</span>
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
  position: relative;
  height: 100vh;
  min-height: 600px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
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

/* Mobile Styles */
@media (max-width: 768px) {
  .hero {
    height: 80vh;
    min-height: 500px;
  }
  
  .hero-content {
    padding: 1rem;
  }
  
  .hero-logo img {
    max-height: 100px;
  }
  
  .hero-location {
    font-size: 1rem;
    padding: 0.75rem 1.5rem;
  }
}

@media (max-width: 480px) {
  .hero {
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
}
</style>
