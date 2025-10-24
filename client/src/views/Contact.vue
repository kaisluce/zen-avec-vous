<template>
  <div class="contact-page">
    <div class="page-header">
      <div class="container">
        <h1>Contact</h1>
        <p class="page-subtitle">Nous sommes là pour vous aider</p>
      </div>
    </div>
    
    <div class="page-content">
      <div class="container">
        <ContactForm />
      </div>
    </div>
  </div>
</template>

<script>
import ContactForm from '@/components/Contact/ContactForm.vue'

export default {
  name: 'Contact',
  components: {
    ContactForm
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

@media (max-width: 768px) {
  .page-header h1 {
    font-size: 2.5rem;
  }
  
  .page-content {
    padding: 3rem 0;
  }
}
</style>
