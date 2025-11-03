<template>
  <div class="contact-page">
    <section class="contact-hero" :style="{ backgroundImage: heroBackground }">
      <div class="hero-overlay">
        <div class="container hero-container">
          <h1 class="hero-title">Nous Contacter Dès Maintenant</h1>
        </div>
      </div>
    </section>

    <section class="contact-info">
      <div class="container info-container">
        <h2 class="info-title">Informations de Contact</h2>
        <div class="info-grid">
          <article class="info-card">
            <div class="info-icon">
              <svg viewBox="0 0 24 24" width="28" height="28">
                <path
                  d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1-.25 11.72 11.72 0 0 0 3.69.59 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1 17 17 0 0 1-17-17 1 1 0 0 1 1-1h2.5a1 1 0 0 1 1 1 11.72 11.72 0 0 0 .59 3.69 1 1 0 0 1-.25 1z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h3 class="info-label">Téléphone</h3>
            <p class="info-value">
              <a href="tel:0982673232">09 82 67 32 32</a>
            </p>
          </article>

          <article class="info-card">
            <div class="info-icon">
              <svg viewBox="0 0 24 24" width="28" height="28">
                <path
                  d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 2v.51l-8 5-8-5V6zM4 18V8.37l7.45 4.65a1 1 0 0 0 1.1 0L20 8.37V18z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h3 class="info-label">Email</h3>
            <p class="info-value">
              <a href="mailto:contact@zenavecnous.fr">contact@zenavecnous.fr</a>
            </p>
          </article>

          <article class="info-card">
            <div class="info-icon">
              <svg viewBox="0 0 24 24" width="28" height="28">
                <path
                  d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 14.5 9 2.5 2.5 0 0 1 12 11.5z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h3 class="info-label">Adresse</h3>
            <p class="info-value">32 rue Victor Hugo, 94140 Alfortville</p>
          </article>

          <article class="info-card">
            <div class="info-icon">
              <svg viewBox="0 0 24 24" width="28" height="28">
                <path
                  d="M18 2H6a2 2 0 0 0-2 2v16l4-4h10a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h3 class="info-label">Suivez-nous</h3>
            <ul class="social-links">
              <li><a href="https://facebook.com" target="_blank" rel="noopener">Fb</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noopener">Ig</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener">X</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noopener">In</a></li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <section class="contact-message">
      <div class="container message-container">
        <h2 class="message-title">Envoyez un Message</h2>
        <ContactForm />
      </div>
    </section>

    <CtaSection :image="aboutImage" />
  </div>
</template>

<script>
import ContactForm from '@/components/Contact/ContactForm.vue'
import aboutImage from '@/assets/pexels-photo-7551583.jpeg'
import CtaSection from '@/components/All/cta.vue'

export default {
  name: 'Contact',
  components: {
    ContactForm,
    CtaSection
  },
  computed: {
    heroBackground() {
      return `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url(${aboutImage})`
    }
  }
}
</script>

<style scoped>
.contact-page {
  display: flex;
  flex-direction: column;
}

.contact-hero {
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.hero-overlay {
  background: rgba(0, 0, 0, 0.45);
}

.hero-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 320px;
}

.hero-title {
  margin: 0;
  font-size: clamp(2.5rem, 6vw, 3.5rem);
  color: var(--color-white);
  font-family: 'Archivo', sans-serif;
  text-align: center;
}

.contact-info {
  padding: 4.5rem 0;
  background: var(--color-white);
}

.info-container {
  text-align: center;
}

.info-title {
  font-size: clamp(2rem, 4vw, 2.75rem);
  margin-bottom: 3rem;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
}

.info-card {
  background: var(--color-white);
  border-radius: 12px;
  padding: 2rem 1.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
}

.info-icon {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: var(--color-light-pink);
  display: grid;
  place-items: center;
  color: var(--color-primary);
}

.info-label {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--color-dark);
}

.info-value {
  margin: 0;
  color: var(--color-text);
  font-size: 1rem;
}

.info-value a {
  color: inherit;
  font-weight: 600;
}

.info-value a:hover {
  color: var(--color-primary);
}

.social-links {
  list-style: none;
  display: flex;
  gap: 0.75rem;
  padding: 0;
  margin: 0;
}

.social-links a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--color-primary);
  color: var(--color-white);
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  transition: transform 0.3s ease, background 0.3s ease;
}

.social-links a:hover {
  transform: translateY(-2px);
  background: var(--color-primary-dark);
}

.contact-message {
  background: var(--color-light-gray, #f4f5f7);
  padding: 4.5rem 0;
}

.message-container {
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
}

.message-title {
  font-size: clamp(2rem, 4vw, 2.75rem);
  margin-bottom: 2.5rem;
}

@media (max-width: 768px) {
  .contact-info {
    padding: 3.5rem 0;
  }

  .contact-message {
    padding: 3.5rem 0;
  }

  .message-container {
    padding: 0 1rem;
  }
}

@media (max-width: 480px) {
  .hero-container {
    min-height: 260px;
  }

  .social-links {
    flex-wrap: wrap;
  }
}

:deep(.contact) {
  background: transparent;
  padding: 0;
}

:deep(.contact .container) {
  max-width: none;
  padding: 0;
}

:deep(.contact .contact-content) {
  text-align: left;
}

:deep(.contact .contact-info) {
  display: none;
}

:deep(.contact .contact-form) {
  border-radius: 16px;
}

:deep(.contact .form-submit) {
  text-transform: uppercase;
}
</style>
