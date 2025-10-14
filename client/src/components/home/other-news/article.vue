<template>
  <article class="article">
    <div class="image-container">
      <img :src="article.image" :alt="article.title" />
    </div>
    <div class="content">
      <span class="type">{{ article.type }}</span>
      <h3 class="title">{{ article.title }}</h3>
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
  }
}
</script>

<style scoped>
.article {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
}

.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  font-size: 18px;
}

.type {
  color: var(--primary-blue);
  font-weight: 500;
  display: inline-block;
  text-decoration: none;
}

.title {
  font-weight: 700;
  color: var(--black);
  line-height: 1.4;
  margin: 0;
}

.image-container {
  flex-shrink: 0;
  width: 88px;
  height: 88px;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 6px;
}

/* Responsive design */
@media (max-width: 768px) {
  .article {
    gap: 0.6rem;
    margin-bottom: 1rem;
  }
  
  .image-container {
    width: 72px;
    height: 72px;
  }
  
  .title {
    font-size: 14px;
  }
  
  .type {
    font-size: 0.8rem;
  }
}
</style>
