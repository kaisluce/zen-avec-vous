<template>
  <section class="testimonials">
    <div class="container testimonials-container">
      <p class="section-label">Clients Satisfaits</p>
      <h2 class="section-title">Ce que disent nos Clients</h2>

      <div class="testimonials-grid">
        <article v-for="testimonial in testimonials" :key="testimonial.id" class="testimonial-card">
          <p class="testimonial-text">“{{ testimonial.text }}”</p>
          <div class="testimonial-author">
            <div class="author-avatar">{{ testimonial.initials }}</div>
            <div>
              <p class="author-name">{{ testimonial.name }}</p>
              <p class="author-role">{{ testimonial.role }}</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TestimonialsSection',
  data() {
    return {
      testimonials: [
        {
          id: 1,
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae nisi ut magna tempus aliquam.',
          name: 'Lorem Ipsum',
          role: 'Client satisfait',
          initials: 'LI'
        },
        {
          id: 2,
          text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
          name: 'Dolor Sit',
          role: 'Partenaire familial',
          initials: 'DS'
        },
        {
          id: 3,
          text: 'Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.',
          name: 'Amet Consectetur',
          role: 'Bénéficiaire',
          initials: 'AC'
        }
      ]
    }
  }
}
</script>

<style scoped>
.testimonials {
  padding: 4.5rem 0;
  background: var(--color-white);
}

.testimonials-container {
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

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
}

.testimonial-card {
  background: var(--color-light-pink);
  border-radius: 16px;
  padding: 2.5rem 2rem;
  text-align: left;
  box-shadow: 0 14px 40px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.testimonial-text {
  margin: 0;
  color: var(--color-text);
  font-size: 1.05rem;
  line-height: 1.7;
  font-style: italic;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.author-avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: var(--color-primary);
  color: var(--color-white);
  display: grid;
  place-items: center;
  font-weight: 700;
}

.author-name {
  margin: 0;
  font-weight: 600;
  color: var(--color-dark);
}

.author-role {
  margin: 0;
  font-size: 0.9rem;
  color: var(--color-text);
  opacity: 0.75;
}

@media (max-width: 768px) {
  .testimonials {
    padding: 3.5rem 0;
  }

  .testimonial-card {
    padding: 2rem 1.5rem;
  }
}
</style>
