<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <div class="footer-logo">
            <img src="@/assets/logo.png" alt="Zen Avec Nous" />
          </div>
          <p class="footer-description">
            Zen Avec Nous - Un service sur mesure pour toute la famille de 6 à 99 ans. 
            Des enfants aux parents jusqu'aux séniors et plus encore.
          </p>
        </div>
        
        <div class="footer-section">
          <h4 class="footer-title">Nos Services</h4>
          <ul class="footer-links">
            <li><router-link to="/aide-a-domicile">Aide à domicile</router-link></li>
            <li><router-link to="/entretien-menager">Entretien ménager</router-link></li>
            <li><router-link to="/garde-enfant">Garde d'enfant</router-link></li>
          </ul>
        </div>
        
        <div class="footer-section">
          <h4 class="footer-title">Contact</h4>
          <div class="footer-contact">
            <div class="contact-item">
              <svg class="contact-icon" viewBox="0 0 512 512" width="16" height="16">
                <path d="M18.92 351.2l108.5-46.52c12.78-5.531 27.77-1.801 36.45 8.98l44.09 53.82c69.25-34 125.5-90.31 159.5-159.5l-53.81-44.04c-10.75-8.781-14.41-23.69-8.974-36.47l46.51-108.5c6.094-13.91 21.1-21.52 35.79-18.11l100.8 23.25c14.25 3.25 24.22 15.8 24.22 30.46c0 252.3-205.2 457.5-457.5 457.5c-14.67 0-27.18-9.968-30.45-24.22l-23.25-100.8C-2.571 372.4 5.018 357.2 18.92 351.2z" fill="currentColor"/>
              </svg>
              <span>+33 9 82 67 32 32</span>
            </div>
            <div class="contact-item">
              <svg class="contact-icon" viewBox="0 0 512 512" width="16" height="16">
                <path d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z" fill="currentColor"/>
              </svg>
              <span>Val-de-Marne et les zones à proximité</span>
            </div>
            <div class="contact-item">
              <svg class="contact-icon" viewBox="0 0 512 512" width="16" height="16">
                <path d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM0 176V384C0 410.5 21.49 432 48 432H464C490.5 432 512 410.5 512 384V176L294.4 339.2C283.8 346.3 270.2 346.3 259.6 339.2L0 176z" fill="currentColor"/>
              </svg>
              <span>contact@zenavecnous.fr</span>
            </div>
          </div>
        </div>
      </div>
      
      <div class="footer-bottom">
        <div class="footer-copyright">
          <p>&copy; {{ currentYear }} Zen Avec Nous. Tous droits réservés.</p>
        </div>
        <div class="footer-links-bottom">
          <router-link to="/mentions-legales">Mentions légales</router-link>
          <router-link to="/politique-confidentialite">Politique de confidentialité</router-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  computed: {
    currentYear() {
      return new Date().getFullYear()
    }
  }
}
</script>

<style scoped>
.footer {
  background-color: var(--color-white);
  border-top: 1px solid var(--color-border);
  padding: 3rem 0 1rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 2rem;
}

.footer-section {
  display: flex;
  flex-direction: column;
}

.footer-logo img {
  height: 40px;
  width: auto;
  margin-bottom: 1rem;
}

.footer-description {
  color: var(--color-text);
  line-height: 1.6;
  font-size: 0.95rem;
}

.footer-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--color-dark);
  margin-bottom: 1rem;
  font-family: 'Archivo', sans-serif;
}

.footer-links {
  list-style: none;
  margin: 0;
  padding: 0;
}

.footer-links li {
  margin-bottom: 0.5rem;
}

.footer-links a {
  color: var(--color-text);
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: var(--color-primary);
}

.footer-contact {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--color-text);
  font-size: 0.95rem;
}

.contact-icon {
  color: var(--color-primary);
  flex-shrink: 0;
}

.footer-bottom {
  border-top: 1px solid var(--color-border);
  padding-top: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-copyright {
  color: var(--color-text);
  font-size: 0.9rem;
}

.footer-links-bottom {
  display: flex;
  gap: 2rem;
}

.footer-links-bottom a {
  color: var(--color-text);
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;
}

.footer-links-bottom a:hover {
  color: var(--color-primary);
}

/* Mobile Styles */
@media (max-width: 768px) {
  .footer {
    padding: 2rem 0 1rem;
  }
  
  .container {
    padding: 0 1rem;
  }
  
  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .footer-bottom {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
  
  .footer-links-bottom {
    gap: 1rem;
  }
}

@media (max-width: 480px) {
  .footer {
    padding: 1.5rem 0 1rem;
  }
  
  .footer-content {
    gap: 1.5rem;
  }
  
  .footer-links-bottom {
    flex-direction: column;
    gap: 0.5rem;
  }
}
</style>
