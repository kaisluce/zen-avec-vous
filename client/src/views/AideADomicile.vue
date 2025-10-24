<template>
  <div class="aide-a-domicile">
    <div class="page-header">
      <div class="container">
        <h1>Aide à domicile</h1>
        <p class="page-subtitle">Conçu pour apporter confort et sérénité à votre quotidien</p>
      </div>
    </div>
    
    <div class="page-content">
      <div class="container">
        <div class="content-grid">
          <div class="content-text">
            <h2>Une assistance personnalisée</h2>
            <p>
              Notre service d'aide à domicile est conçu pour apporter confort et sérénité à votre quotidien. 
              Nous offrons une assistance personnalisée, adaptée aux besoins spécifiques de chacun.
            </p>
            <p>
              Que vous ayez besoin d'aide pour les tâches quotidiennes, l'accompagnement dans vos activités, 
              ou simplement d'une présence rassurante, notre équipe qualifiée est là pour vous.
            </p>
            
            <div class="contact-info">
              <h3>Contactez-nous</h3>
              <p><strong>Téléphone:</strong> +33 9 82 67 32 32</p>
              <p><strong>Horaires:</strong> Lundi au Vendredi de 8h à 19h</p>
            </div>
          </div>
          
          <div class="content-image">
            <img :src="serviceImage" alt="Aide à domicile" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import serviceImage from '@/assets/pexels-photo-7551583.jpeg'

export default {
  name: 'AideADomicile',
  data() {
    return {
      serviceImage
    }
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

.content-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.content-text h2 {
  margin-bottom: 1.5rem;
}

.content-text p {
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
  line-height: 1.7;
}

.contact-info {
  background: var(--color-light-pink);
  padding: 2rem;
  border-radius: 12px;
  margin-top: 2rem;
}

.contact-info h3 {
  margin-bottom: 1rem;
  color: var(--color-primary);
}

.content-image img {
  width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .page-header h1 {
    font-size: 2.5rem;
  }
  
  .content-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .page-content {
    padding: 3rem 0;
  }
}
</style>
