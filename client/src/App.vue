<template>
  <div id="app">
    <Header />
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/header/header.vue'
import Footer from '@/components/Footer/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
/* Import Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Archivo:wght@400;600;700&family=Roboto:wght@400;500;600&display=swap');

/* CSS Variables for Color Scheme */
:root {
  /* Primary Colors */
  --color-primary: #C74382;
  --color-primary-dark: #BC3878;
  
  /* Text Colors */
  --color-dark: #12080D;
  --color-text: #1F1C1D;
  
  /* Background Colors */
  --color-white: #FFFFFF;
  --color-light-pink: #F8EEF2;
  --color-border: #F3D4E1;
  
  /* Additional Colors */
  --color-accent: #1A0C13;
  --color-gray: #222222;
}

/* Reset and Base Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 16px;
  scroll-behavior: smooth;
}

body {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.6;
  color: var(--color-text);
  background-color: var(--color-white);
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}

/* Typography */
h1, h2, h3, h4, h5, h6 {
  font-family: 'Archivo', sans-serif;
  font-weight: 700;
  color: var(--color-dark);
  line-height: 1.2;
}

h1 {
  font-size: 3.5rem;
}

h2 {
  font-size: 2.5rem;
}

h3 {
  font-size: 2rem;
}

h4 {
  font-size: 1.5rem;
}

h5 {
  font-size: 1.25rem;
}

h6 {
  font-size: 1.1rem;
}

p {
  margin-bottom: 1rem;
}

a {
  color: var(--color-primary);
  text-decoration: none;
  transition: color 0.3s ease;
}

a:hover {
  color: var(--color-primary-dark);
}

/* Button Styles */
.btn-primary {
  background-color: var(--color-primary);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  font-family: 'Archivo', sans-serif;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: inline-block;
}

.btn-primary:hover {
  background-color: var(--color-primary-dark);
}

.btn-outline {
  background-color: transparent;
  color: var(--color-primary);
  padding: 0.75rem 1.5rem;
  border: 2px solid var(--color-primary);
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  font-family: 'Archivo', sans-serif;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-block;
}

.btn-outline:hover {
  background-color: var(--color-primary);
  color: white;
}

/* Container */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Utility Classes */
.text-center {
  text-align: center;
}

.text-left {
  text-align: left;
}

.text-right {
  text-align: right;
}

.mb-1 { margin-bottom: 0.5rem; }
.mb-2 { margin-bottom: 1rem; }
.mb-3 { margin-bottom: 1.5rem; }
.mb-4 { margin-bottom: 2rem; }

.mt-1 { margin-top: 0.5rem; }
.mt-2 { margin-top: 1rem; }
.mt-3 { margin-top: 1.5rem; }
.mt-4 { margin-top: 2rem; }

/* Responsive Design */
@media (max-width: 768px) {
  html {
    font-size: 14px;
  }
  
  .container {
    padding: 0 1rem;
  }
  
  h1 {
    font-size: 2.5rem;
  }
  
  h2 {
    font-size: 2rem;
  }
  
  h3 {
    font-size: 1.75rem;
  }
}

@media (max-width: 480px) {
  html {
    font-size: 13px;
  }
  
  h1 {
    font-size: 2rem;
  }
  
  h2 {
    font-size: 1.75rem;
  }
  
  h3 {
    font-size: 1.5rem;
  }
}

/* Smooth transitions */
* {
  transition: color 0.3s ease, background-color 0.3s ease, border-color 0.3s ease;
}

/* Focus styles for accessibility */
button:focus,
input:focus,
textarea:focus,
select:focus,
a:focus {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

/* Selection styles */
::selection {
  background-color: var(--color-primary);
  color: white;
}
</style>
