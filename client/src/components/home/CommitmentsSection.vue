<template>
  <section class="commitments">
    <div class="container commitments-container">
      <p class="section-label">Authenticité &amp; Soin</p>
      <h2 class="section-title">Notre Engagement envers Votre Bien-être</h2>

      <div class="commitments-grid">
        <article v-for="commitment in commitments" :key="commitment.id" class="commitment-card">
          <span class="commitment-number">{{ commitment.number }}</span>
          <h3 class="commitment-title">{{ commitment.title }}</h3>
          <p class="commitment-text">{{ commitment.text }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CommitmentsSection',
  data() {
    return {
      commitments: [
        {
          id: 1,
          number: '01',
          title: 'Personnalisé et Respectueux',
          text: 'Chaque accompagnement est adapté aux besoins individuels, avec un respect sincère et bienveillant.'
        },
        {
          id: 2,
          number: '02',
          title: 'Compétence et Professionnalisme',
          text: 'Notre équipe qualifiée assure un service irréprochable, soutenu par une passion du métier.'
        },
        {
          id: 3,
          number: '03',
          title: 'Flexibilité et Fiabilité',
          text: 'Nous intervenons quand vous avez besoin de nous, avec une organisation fiable et réactive.'
        }
      ]
    }
  }
}
</script>

<style scoped>
.commitments {
  padding: 4.5rem 0;
  background: var(--color-white);
}

.commitments-container {
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
  margin: 0 0 3rem 0;
  font-family: 'Archivo', sans-serif;
  color: var(--color-dark);
}

.commitments-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
}

.commitment-card {
  background: var(--color-light-pink);
  border-radius: 16px;
  padding: 2.5rem 2rem;
  text-align: left;
  box-shadow: 0 14px 40px rgba(0, 0, 0, 0.08);
  position: relative;
  overflow: hidden;
}

.commitment-number {
  font-size: 2.75rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.9);
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
}

.commitment-title {
  margin: 0 0 1rem 0;
  font-size: 1.35rem;
  font-weight: 700;
  color: var(--color-dark);
}

.commitment-text {
  margin: 0;
  color: var(--color-text);
  line-height: 1.7;
  font-size: 1rem;
}

@media (max-width: 768px) {
  .commitments {
    padding: 3.5rem 0;
  }

  .commitment-card {
    padding: 2rem 1.5rem;
  }
}
</style>
