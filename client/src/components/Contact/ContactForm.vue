<template>
  <section class="contact">
    <div class="container">
      <div class="contact-content">
        <div class="contact-info">
          <h4 class="contact-title">Contactez-nous !</h4>
          <p class="contact-subtitle">Un conseiller vous contactera dès que possible</p>
        </div>
        
        <form class="contact-form" @submit.prevent="submitForm">
          <div class="form-group">
            <label for="firstName" class="form-label">Nom *</label>
            <input 
              type="text" 
              id="firstName" 
              v-model="form.firstName"
              class="form-input" 
              placeholder="Nom"
              required
            />
          </div>
          
          <div class="form-group">
            <label for="email" class="form-label">E-mail *</label>
            <input 
              type="email" 
              id="email" 
              v-model="form.email"
              class="form-input" 
              placeholder="Email"
              required
            />
          </div>
          
          <div class="form-group">
            <label for="phone" class="form-label">Téléphone *</label>
            <input 
              type="tel" 
              id="phone" 
              v-model="form.phone"
              class="form-input" 
              placeholder="Téléphone"
              required
            />
          </div>
          
          <div class="form-group">
            <label for="subject" class="form-label">Sujet *</label>
            <input 
              type="text" 
              id="subject" 
              v-model="form.subject"
              class="form-input" 
              placeholder="Sujet"
              required
            />
          </div>
          
          <div class="form-group">
            <label for="message" class="form-label">Message *</label>
            <textarea 
              id="message" 
              v-model="form.message"
              class="form-textarea" 
              rows="4"
              placeholder="Message"
              required
            ></textarea>
          </div>
          
          <button type="submit" class="form-submit" :disabled="isSubmitting">
            <span v-if="!isSubmitting">Envoyer</span>
            <span v-else>Envoi en cours...</span>
          </button>
        </form>
        
        <div v-if="submitStatus" class="form-message" :class="submitStatus.type">
          {{ submitStatus.message }}
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactForm',
  data() {
    return {
      form: {
        firstName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      },
      isSubmitting: false,
      submitStatus: null
    }
  },
  methods: {
    async submitForm() {
      this.isSubmitting = true
      this.submitStatus = null
      
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000))
        
        // Reset form
        this.form = {
          firstName: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        }
        
        this.submitStatus = {
          type: 'success',
          message: 'Le formulaire a bien été envoyé !'
        }
      } catch (error) {
        this.submitStatus = {
          type: 'error',
          message: 'Une erreur s\'est produite lors de l\'envoi du formulaire. Veuillez vérifier à nouveau tous les champs du formulaire.'
        }
      } finally {
        this.isSubmitting = false
      }
    }
  }
}
</script>

<style scoped>
.contact {
  padding: 4rem 0;
  background-color: var(--color-light-pink);
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
}

.contact-content {
  text-align: center;
}

.contact-info {
  margin-bottom: 3rem;
}

.contact-title {
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-dark);
  margin-bottom: 1rem;
  font-family: 'Archivo', sans-serif;
}

.contact-subtitle {
  font-size: 1.1rem;
  color: var(--color-text);
}

.contact-form {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  text-align: left;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-label {
  display: block;
  font-weight: 600;
  color: var(--color-dark);
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid var(--color-border);
  border-radius: 6px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  box-sizing: border-box;
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: var(--color-primary);
}

.form-textarea {
  resize: vertical;
  min-height: 100px;
}

.form-submit {
  width: 100%;
  background-color: var(--color-primary);
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.form-submit:hover:not(:disabled) {
  background-color: var(--color-primary-dark);
}

.form-submit:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.form-message {
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 6px;
  font-weight: 500;
}

.form-message.success {
  background-color: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}

.form-message.error {
  background-color: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
}

/* Mobile Styles */
@media (max-width: 768px) {
  .contact {
    padding: 3rem 0;
  }
  
  .container {
    padding: 0 1rem;
  }
  
  .contact-title {
    font-size: 1.75rem;
  }
  
  .contact-subtitle {
    font-size: 1rem;
  }
  
  .contact-form {
    padding: 1.5rem;
  }
  
  .form-group {
    margin-bottom: 1rem;
  }
}

@media (max-width: 480px) {
  .contact {
    padding: 2rem 0;
  }
  
  .contact-title {
    font-size: 1.5rem;
  }
  
  .contact-form {
    padding: 1rem;
  }
}
</style>
