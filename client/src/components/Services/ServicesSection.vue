<template>
  <section class="services">
    <div class="container">
      <div class="services-header">
        <h2 class="services-title">Découvrez nos services</h2>
        <p class="services-description">
          Explorez notre gamme de services personnalisés, conçus pour répondre aux besoins de toute la famille. 
          Découvrez nos services dès aujourd'hui et laissez nous prendre soin de vous.
        </p>
      </div>
      
      <div class="services-grid">
        <ServiceCard
          v-for="service in services"
          :key="service.id"
          :service="service"
        />
      </div>
      
      <div class="services-footer">
        <p class="services-link-text">
          Découvrez l'ensemble de 
          <router-link to="/nos-services" class="services-link">nos services.</router-link>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import ServiceCard from './ServiceCard.vue'

export default {
  name: 'ServicesSection',
  components: {
    ServiceCard
  },
  data() {
    return {
      services: [
        {
          id: 1,
          title: 'Aide à domicile',
          description: 'Conçu pour apporter confort et sérénité à votre quotidien. Une assistance personnalisée, adaptée aux besoins spécifiques de chacun.',
          icon: 'home',
          link: '/aide-a-domicile'
        },
        {
          id: 2,
          title: 'Entretien Ménager',
          description: 'Conçu pour vous offrir un espace de vie propre et agréable sans effort. Besoin d\'un nettoyage régulier ou d\'un grand ménage de printemps ?',
          icon: 'cleaning',
          link: '/entretien-menager'
        },
        {
          id: 3,
          title: 'Garde d\'enfants',
          description: 'Conçu pour offrir à vos enfants un environnement sûr, stimulant et chaleureux. Pour quelques heures, toute une journée, ou à temps plein,',
          icon: 'childcare',
          link: '/garde-enfant'
        }
      ]
    }
  }
}
</script>

<style scoped>
.services {
  padding: 4rem 0;
  background-color: var(--color-white);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.services-header {
  text-align: center;
  margin-bottom: 3rem;
}

.services-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-dark);
  margin-bottom: 1rem;
  font-family: 'Archivo', sans-serif;
}

.services-description {
  font-size: 1.1rem;
  color: var(--color-text);
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.services-footer {
  text-align: center;
}

.services-link-text {
  font-size: 1.1rem;
  color: var(--color-text);
}

.services-link {
  color: var(--color-primary);
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

.services-link:hover {
  color: var(--color-primary-dark);
  text-decoration: underline;
}

/* Mobile Styles */
@media (max-width: 768px) {
  .services {
    padding: 3rem 0;
  }
  
  .container {
    padding: 0 1rem;
  }
  
  .services-title {
    font-size: 2rem;
  }
  
  .services-description {
    font-size: 1rem;
  }
  
  .services-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}

@media (max-width: 480px) {
  .services {
    padding: 2rem 0;
  }
  
  .services-title {
    font-size: 1.75rem;
  }
  
  .services-description {
    font-size: 0.95rem;
  }
}
</style>
