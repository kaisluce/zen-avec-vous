<template>
  <section class="about">
    <div class="about-hero">
      <div class="container hero-container">
        <h1 class="hero-title">À Propos de Nous</h1>
      </div>
    </div>

    <div class="history container">
      <div class="history-image">
        <img
          :src="aboutImage"
          alt="Auxiliaire de vie apportant un accompagnement bienveillant"
          loading="lazy"
        />
      </div>

      <div class="history-content">
        <p class="section-label">Authenticité</p>
        <h2 class="section-title">Notre Histoire</h2>
        <p class="section-text">
          Zen Avec Nous est une entreprise dévouée au soutien et à l’accompagnement des personnes âgées, handicapées et nécessitant de l’aide quotidienne. Nous offrons une gamme complète de services pour répondre à leurs besoins avec compassion et professionnalisme.
        </p>
        <p class="section-text">
          Fondée avec la mission d’apporter du réconfort et de l’assistance aux personnes vulnérables, Zen Avec Nous s’engage à offrir des services de qualité et personnalisés pour améliorer la qualité de vie de nos bénéficiaires.
        </p>
      </div>
    </div>

    <div class="values">
      <div class="container values-container">
        <p class="section-label">Nos Valeurs</p>
        <h2 class="section-title">Nos Engagements et Principes</h2>

        <div class="values-image">
          <img
            :src="aboutImage"
            alt="Accompagnement au quotidien d’une personne âgée"
            loading="lazy"
          />
        </div>

        <div class="values-grid">
          <article class="value-card">
            <h3 class="value-title">Bienveillance</h3>
            <p class="value-text">
              Nous traitons chaque individu avec compassion et gentillesse, en veillant à leur bien-être et à leur confort à tout moment.
            </p>
          </article>

          <article class="value-card">
            <h3 class="value-title">Professionnalisme</h3>
            <p class="value-text">
              Nos équipes sont dévouées à offrir des services de haute qualité en respectant les normes d’éthique et d’excellence professionnelle.
            </p>
          </article>

          <article class="value-card">
            <h3 class="value-title">Engagement</h3>
            <p class="value-text">
              Nous nous engageons à accompagner nos bénéficiaires avec dévouement et responsabilité, en étant présents à chaque étape de leur parcours avec nous.
            </p>
          </article>
        </div>
      </div>
    </div>

    <CtaSection :image="aboutImage" />
  </section>
</template>

<script>
import aboutImage from '@/assets/pexels-photo-7551583.jpeg'
import CtaSection from '@/components/All/cta.vue'

export default {
  name: 'AboutSection',
  components: {
    CtaSection
  },
  data() {
    return {
      aboutImage
    }
  }
}
</script>

<style scoped>
.about {
  background-color: var(--color-white);
  color: var(--color-text);
}

.about-hero {
  background: var(--color-dark);
  padding: 5rem 0;
}

.hero-container {
  display: flex;
  justify-content: center;
}

.hero-title {
  margin: 0;
  font-size: clamp(2.5rem, 6vw, 3.5rem);
  font-weight: 700;
  color: var(--color-white);
  text-align: center;
  font-family: 'Archivo', sans-serif;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem;
}

.history {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  padding: 5rem 0;
}

.history-image {
  position: relative;
}

.history-image img {
  width: 100%;
  height: 100%;
  max-height: 420px;
  border-radius: 12px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  object-fit: cover;
}

.section-label {
  color: var(--color-primary);
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 0.5rem;
}

.section-title {
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 700;
  color: var(--color-dark);
  margin: 0;
  font-family: 'Archivo', sans-serif;
}

.section-text {
  font-size: 1.05rem;
  color: var(--color-text);
  line-height: 1.7;
  margin: 0 0 1.5rem 0;
}

.values {
  background: var(--color-light-gray, #f4f5f7);
  padding: 5rem 0;
}

.values-container {
  text-align: center;
}

.values-image {
  margin: 3rem auto 2.5rem;
  max-width: 820px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 6px 30px rgba(0, 0, 0, 0.12);
}

.values-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.value-card {
  background: var(--color-white);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
  text-align: left;
}

.value-title {
  margin: 0 0 1rem 0;
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--color-dark);
}

.value-text {
  margin: 0;
  color: var(--color-text);
  line-height: 1.6;
}

@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }
  
  .history {
    grid-template-columns: 1fr;
    gap: 2.5rem;
    padding: 3.5rem 0;
  }
  
  .values {
    padding: 3.5rem 0;
  }

  .values-image {
    margin: 2rem auto;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2.25rem;
  }

  .values-grid {
    gap: 1.5rem;
  }
}
</style>
