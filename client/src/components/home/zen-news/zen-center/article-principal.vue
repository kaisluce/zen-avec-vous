<template>
  <article class="article-principal">
    <div class="image-container">
      <img :src="article.image" :alt="article.title" />
      <div class="gradient-overlay"></div>
    </div>
    <div class="content">
      <div class="type">{{ article.type }}</div>
      <h2 class="title">{{ article.title }}</h2>
      <p class="description">{{ article.description }}</p>
      <div class="date">{{ formattedDate }}</div>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  computed: {
    formattedDate() {
      if (!this.article.date) return '';
      
      const date = new Date(this.article.date);
      if (isNaN(date.getTime())) return this.article.date;
      
      const months = [
        'janvier', 'février', 'mars', 'avril', 'mai', 'juin',
        'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'
      ];
      
      const day = date.getDate();
      const dayFormatted = day === 1 ? '1er' : day;
      const month = months[date.getMonth()];
      const year = date.getFullYear();
      
      return `${dayFormatted} ${month} ${year}`;
    }
  }
}
</script>

<style scoped>
.article-principal {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  height: 400px;
  margin-bottom: 2rem;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.article-principal:hover {
  transform: translateY(-2px);
}

.image-container {
  position: relative;
  width: 100%;
  height: 100%;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.gradient-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  background-image: linear-gradient(360deg,var(--black) 0%,rgba(10,10,10,.5) 100%);
}

.content {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem;
  color: var(--lightest);
  z-index: 2;
}

.type {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--lightv);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.5rem;
}

.title {
  font-size: 22px;
  font-weight: 700;
  line-height: 25px;
  margin-bottom: 0.75rem;
  color: var(--lightest);
}

.description {
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 20px;
  opacity: 0.9;
}

.date {
  font-size: 0.875rem;
  opacity: 0.8;
  font-weight: 500;
}
</style>
