<template>
  <section class="service-showcase">
    <div class="container showcase-container">
      <p class="section-label">Qualité &amp; Soin</p>
      <h2 class="section-title">Nos Services de Soutien Personnalisés</h2>

      <div class="showcase-grid">
        <article v-for="service in services" :key="service.id" class="showcase-card">
          <div class="card-image">
            <img :src="service.image" :alt="service.title" loading="lazy" />
          </div>
          <h3 class="card-title">{{ service.title }}</h3>
          <ul class="card-list">
            <li v-for="item in service.points" :key="item">{{ item }}</li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
import aboutImage from '@/assets/pexels-photo-7551583.jpeg'

export default {
  name: 'ServiceShowcase',
  data() {
    return {
      services: [
        {
          id: 1,
          title: "Aide à l'autonomie",
          image: aboutImage,
          points: [
            'Soutien quotidien pour les gestes essentiels',
            'Planification d’activités adaptées',
            'Présence rassurante et bienveillance'
          ]
        },
        {
          id: 2,
          title: 'Aide à la préparation de repas',
          image: aboutImage,
          points: [
            'Menus personnalisés selon vos envies',
            'Préparation de repas équilibrés et savoureux',
            'Accompagnement convivial lors des repas'
          ]
        },
        {
          id: 3,
          title: 'Entretien de la maison',
          image: aboutImage,
          points: [
            'Ménage régulier ou ponctuel selon vos besoins',
            'Entretien du linge et organisation du foyer',
            'Soins dédiés aux espaces de vie sensibles'
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
.service-showcase {
  padding: 4.5rem 0;
  background: var(--color-light-gray, #f4f5f7);
}

.showcase-container {
  text-align: center;
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
  margin: 0;
  font-family: 'Archivo', sans-serif;
  color: var(--color-dark);
}

.showcase-grid {
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
}

.showcase-card {
  background: var(--color-white);
  border-radius: 16px;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  text-align: left;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.card-image img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-title {
  margin: 1.5rem 1.5rem 1rem;
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--color-dark);
}

.card-list {
  list-style: none;
  margin: 0 1.5rem 2rem;
  padding: 0;
  display: grid;
  gap: 0.75rem;
}

.card-list li {
  position: relative;
  padding-left: 1.5rem;
  color: var(--color-text);
  line-height: 1.6;
}

.card-list li::before {
  content: '•';
  position: absolute;
  left: 0;
  top: 0;
  color: var(--color-primary);
  font-weight: 700;
}

@media (max-width: 768px) {
  .service-showcase {
    padding: 3.5rem 0;
  }

  .showcase-grid {
    gap: 1.5rem;
  }
}
</style>
