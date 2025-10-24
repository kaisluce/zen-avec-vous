<template>
  <div class="blog">
    <div class="page-header">
      <div class="container">
        <h1>Blog</h1>
        <p class="page-subtitle">Découvrez nos articles et conseils</p>
      </div>
    </div>
    
    <div class="page-content">
      <div class="container">
        <div class="coming-soon">
          <h2>Bientôt disponible</h2>
          <p>Notre blog sera bientôt en ligne avec des articles et conseils pour vous accompagner au quotidien.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Blog'
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

.coming-soon {
  text-align: center;
  padding: 3rem;
  background: var(--color-light-pink);
  border-radius: 12px;
}

.coming-soon h2 {
  margin-bottom: 1rem;
  color: var(--color-primary);
}

.coming-soon p {
  font-size: 1.1rem;
  color: var(--color-text);
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
