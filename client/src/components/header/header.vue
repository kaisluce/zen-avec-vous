<template>
  <header class="header">
    <div class="header-container">
      <div class="logo-container">
        <router-link to="/" class="logo-link">
          <img src="@/assets/logo.png" alt="Zen Avec Nous" class="logo" />
        </router-link>
      </div>
      
      <nav class="navigation">
        <ul class="nav-menu">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Accueil</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/a-propos" class="nav-link">À propos</router-link>
          </li>
          <li class="nav-item dropdown" :class="{ active: dropdownOpen }">
            <a href="#" class="nav-link dropdown-toggle" @click.prevent="toggleDropdown">
              Services
              <svg class="dropdown-icon" viewBox="0 0 24 24" width="16" height="16">
                <path d="M7 10l5 5 5-5z" fill="currentColor"/>
              </svg>
            </a>
            <ul class="dropdown-menu" :class="{ active: dropdownOpen }">
              <li><router-link to="/nos-services" class="dropdown-link">Nos services</router-link></li>
              <li><router-link to="/aide-a-domicile" class="dropdown-link">Aide à domicile</router-link></li>
              <li><router-link to="/entretien-menager" class="dropdown-link">Entretien ménager</router-link></li>
              <li><router-link to="/garde-enfant" class="dropdown-link">Garde d'enfant</router-link></li>
            </ul>
          </li>
          <li class="nav-item">
            <router-link to="/blog" class="nav-link">Blog</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link">Contact</router-link>
          </li>
        </ul>
      </nav>
      
      <div class="header-actions">
        <router-link to="/nos-services" class="btn-primary">Découvrir nos services</router-link>
      </div>
      
      <button class="mobile-menu-toggle" @click="toggleMobileMenu" :class="{ active: mobileMenuOpen }">
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
      </button>
    </div>
    
    <!-- Mobile Menu -->
    <div class="mobile-menu" :class="{ active: mobileMenuOpen }">
      <ul class="mobile-nav-menu">
        <li><router-link to="/" class="mobile-nav-link" @click="closeMobileMenu">Accueil</router-link></li>
        <li><router-link to="/a-propos" class="mobile-nav-link" @click="closeMobileMenu">À propos</router-link></li>
        <li><router-link to="/nos-services" class="mobile-nav-link" @click="closeMobileMenu">Nos services</router-link></li>
        <li><router-link to="/aide-a-domicile" class="mobile-nav-link" @click="closeMobileMenu">Aide à domicile</router-link></li>
        <li><router-link to="/entretien-menager" class="mobile-nav-link" @click="closeMobileMenu">Entretien ménager</router-link></li>
        <li><router-link to="/garde-enfant" class="mobile-nav-link" @click="closeMobileMenu">Garde d'enfant</router-link></li>
        <li><router-link to="/blog" class="mobile-nav-link" @click="closeMobileMenu">Blog</router-link></li>
        <li><router-link to="/contact" class="mobile-nav-link" @click="closeMobileMenu">Contact</router-link></li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      dropdownOpen: false,
      mobileMenuOpen: false
    }
  },
  methods: {
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen
    },
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen
    },
    closeMobileMenu() {
      this.mobileMenuOpen = false
    }
  },
  mounted() {
    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.dropdown')) {
        this.dropdownOpen = false
      }
    })
  }
}
</script>

<style scoped>
.header {
  background-color: var(--color-light-pink);
  border-bottom: 1px solid var(--color-border);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 80px;
}

.logo-container {
  flex-shrink: 0;
}

.logo-link {
  display: block;
}

.logo {
  height: 47px;
  width: auto;
}

.navigation {
  flex: 1;
  display: flex;
  justify-content: center;
}

.nav-menu {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 2rem;
}

.nav-item {
  position: relative;
}

.nav-link {
  color: var(--color-dark);
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  padding: 0.5rem 0;
  transition: color 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.nav-link.router-link-active,
.nav-link.router-link-exact-active {
  color: var(--color-primary);
  font-weight: 600;
}

.nav-link:hover {
  color: var(--color-primary);
}

.dropdown {
  position: relative;
}

.dropdown-toggle {
  cursor: pointer;
}

.dropdown-icon {
  transition: transform 0.3s ease;
}

.dropdown.active .dropdown-icon {
  transform: rotate(180deg);
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  list-style: none;
  margin: 0;
  padding: 0.5rem 0;
  min-width: 200px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.3s ease;
}

.dropdown-menu.active {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.dropdown-link {
  display: block;
  padding: 0.75rem 1rem;
  color: var(--color-dark);
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.dropdown-link.router-link-active,
.dropdown-link.router-link-exact-active {
  color: var(--color-primary);
  font-weight: 600;
}

.dropdown-link:hover {
  background-color: var(--color-light-pink);
  color: var(--color-primary);
}

.header-actions {
  flex-shrink: 0;
}

.btn-primary {
  background-color: var(--color-primary);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  transition: background-color 0.3s ease;
  text-transform: uppercase;
}

.btn-primary:hover {
  background-color: var(--color-primary-dark);
}

.mobile-menu-toggle {
  display: none;
  flex-direction: column;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  gap: 4px;
}

.hamburger-line {
  width: 24px;
  height: 2px;
  background-color: var(--color-dark);
  transition: all 0.3s ease;
}

.mobile-menu-toggle.active .hamburger-line:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.mobile-menu-toggle.active .hamburger-line:nth-child(2) {
  opacity: 0;
}

.mobile-menu-toggle.active .hamburger-line:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -6px);
}

.mobile-menu {
  display: none;
  background-color: white;
  border-top: 1px solid var(--color-border);
}

.mobile-nav-menu {
  list-style: none;
  margin: 0;
  padding: 1rem 0;
}

.mobile-nav-link {
  display: block;
  padding: 1rem 2rem;
  color: var(--color-dark);
  text-decoration: none;
  border-bottom: 1px solid var(--color-border);
}

.mobile-nav-link.router-link-active,
.mobile-nav-link.router-link-exact-active {
  color: var(--color-primary);
  font-weight: 600;
}

.mobile-nav-link:hover {
  background-color: var(--color-light-pink);
  color: var(--color-primary);
}

/* Mobile Styles */
@media (max-width: 768px) {
  .header-container {
    padding: 0 1rem;
  }
  
  .navigation {
    display: none;
  }
  
  .header-actions {
    display: none;
  }
  
  .mobile-menu-toggle {
    display: flex;
  }
  
  .mobile-menu.active {
    display: block;
  }
  
  .logo {
    height: 40px;
  }
}

@media (max-width: 480px) {
  .header-container {
    padding: 0 1rem;
    min-height: 70px;
  }
  
  .logo {
    height: 35px;
  }
}
</style>
