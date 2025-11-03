<template>
  <section class="about-preview">
    <div class="container about-container">
      <div class="about-image">
        <img :src="aboutImage" alt="Accompagnement chaleureux à domicile" loading="lazy" />
      </div>
      <div class="about-content">
        <p class="section-label">Authenticité</p>
        <h2 class="section-title">Notre Histoire et Notre Engagement</h2>
        <p class="section-text">
          Depuis plus de cinq ans, Zen Avec Nous accompagne les familles et les personnes vulnérables
          avec un sens profond de la bienveillance. Nous croyons que chaque personne mérite une
          attention personnalisée, un soutien quotidien et une présence rassurante.
        </p>
        <p class="section-text">
          Notre équipe pluridisciplinaire unie expertise, écoute et empathie pour imaginer des services
          qui s’adaptent à chaque besoin. Ensemble, faisons de votre quotidien un espace de sérénité.
        </p>
        <router-link to="/a-propos" class="about-link">Découvrir notre histoire</router-link>
      </div>
    </div>
  </section>
</template>

<script>
import aboutImage from '@/assets/pexels-photo-7551583.jpeg'

export default {
  name: 'HomeAboutPreview',
  data() {
    return {
      aboutImage
    }
  }
}
</script>

<style scoped>
.about-preview {
  padding: 4.5rem 0;
  background: var(--color-white);
}

.about-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 3rem;
  align-items: center;
}

.about-image img {
  width: 100%;
  border-radius: 16px;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.12);
  object-fit: cover;
}

.section-label {
  color: var(--color-primary);
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin: 0 0 0.75rem 0;
}

.section-title {
  font-size: clamp(2rem, 4vw, 2.75rem);
  margin: 0 0 1.5rem 0;
  font-family: 'Archivo', sans-serif;
  color: var(--color-dark);
}

.section-text {
  margin: 0 0 1.25rem 0;
  color: var(--color-text);
  line-height: 1.7;
  font-size: 1.05rem;
}

.about-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  color: var(--color-primary);
  text-decoration: none;
}

.about-link::after {
  content: '→';
  transition: transform 0.3s ease;
}

.about-link:hover::after {
  transform: translateX(4px);
}

@media (max-width: 768px) {
  .about-preview {
    padding: 3.5rem 0;
  }

  .about-container {
    gap: 2rem;
  }
}
</style>
