<template>
  <section class="cta" :style="{ backgroundImage: backgroundStyle }">
    <div class="cta-overlay">
      <div class="container cta-container">
        <p class="cta-label">{{ label }}</p>
        <h2 class="cta-title">{{ title }}</h2>
        <RouterLink :to="buttonTo" class="cta-button">{{ buttonText }}</RouterLink>
        <p class="cta-phone">
          {{ phonePrompt }}
          <a :href="phoneHref">{{ phoneDisplay }}</a>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import defaultBackground from '@/assets/pexels-photo-7551583.jpeg'

export default {
  name: 'CtaSection',
  props: {
    image: {
      type: String,
      default: () => defaultBackground
    },
    gradient: {
      type: String,
      default: 'linear-gradient(rgba(0, 0, 0, 0.72), rgba(0, 0, 0, 0.72))'
    },
    label: {
      type: String,
      default: 'Contactez-nous dès aujourd’hui'
    },
    title: {
      type: String,
      default: 'Commencez votre parcours Zen avec Nous'
    },
    buttonText: {
      type: String,
      default: 'Découvrir nos services'
    },
    buttonTo: {
      type: [String, Object],
      default: '/nos-services'
    },
    phonePrompt: {
      type: String,
      default: 'Consultation gratuite ?'
    },
    phoneDisplay: {
      type: String,
      default: '09 82 67 32 32'
    },
    phoneHref: {
      type: String,
      default: 'tel:0982673232'
    }
  },
  computed: {
    backgroundStyle() {
      return `${this.gradient}, url(${this.image})`
    }
  }
}
</script>

<style scoped>
.cta {
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.cta-overlay {
  background: rgba(0, 0, 0, 0.55);
}

.cta-container {
  padding: 5rem 2rem;
  text-align: center;
  color: var(--color-white);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.cta-label {
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.75);
  margin: 0;
}

.cta-title {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  margin: 0;
  font-family: 'Archivo', sans-serif;
  color: var(--color-white);
}

.cta-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: var(--color-primary);
  color: var(--color-white);
  font-weight: 600;
  text-decoration: none;
  padding: 0.9rem 2.5rem;
  border-radius: 999px;
  transition: background 0.3s ease, transform 0.3s ease;
  position: relative;
  overflow: visible;
}

.cta-button:hover {
  background: var(--color-primary-dark, #c71c6d);
  transform: translateY(-2px);
}

.cta-button::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: -1.6rem;
  transform: translateX(-50%);
  width: 60px;
  height: 2px;
  background: rgba(255, 255, 255, 0.85);
  border-radius: 999px;
}

.cta-phone {
  margin: 2.25rem 0 0 0;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.85);
}

.cta-phone a {
  color: var(--color-white);
  font-weight: 600;
  text-decoration: none;
}

.cta-phone a:hover {
  text-decoration: underline;
}
</style>
