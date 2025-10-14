<template>
  <article class="article-secondaire">
    <div class="image-container">
      <img :src="article.image" :alt="article.title" />
      <div class="gradient-overlay"></div>
    </div>
    <div class="content">
      <h3 class="title">{{ article.title }}</h3>
      <div class="type">{{ article.type }}</div>
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
.article-secondaire {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  height: 180px;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.article-secondaire:hover {
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
  padding: 1rem;
  color: white;
  z-index: 2;
}

.type {
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--lightv);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.25rem;
}

.title {
  font-size: 19px;
  font-weight: 700;
  line-height: 24px;
  color: white;
}
</style>
