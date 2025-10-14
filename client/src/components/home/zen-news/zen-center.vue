<template>
  <section class="zen-center">
    <!-- Article principal -->
    <ArticlePrincipal :article="articlePrincipal" />
    
    <!-- Grille d'articles secondaires -->
    <div class="grille-articles">
      <ArticleSecondaire 
        v-for="article in articlesSecondaires" 
        :key="article.id" 
        :article="article" 
      />
    </div>
  </section>
</template>

<script>
import ArticlePrincipal from '@/components/home/zen-news/zen-center/article-principal.vue';
import ArticleSecondaire from '@/components/home/zen-news/zen-center/article-secondaire.vue';

export default {
  components: {
    ArticlePrincipal,
    ArticleSecondaire
  },
  data() {
    return {
      articlePrincipal: {
        id: 1,
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
        type: 'actualités',
        date: '2025-07-05',
        image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      articlesSecondaires: [
        {
          id: 2,
          title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          type: 'actualités',
          image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
        },
        {
          id: 3,
          title: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
          type: 'news',
          image: 'https://images.unsplash.com/photo-1506629905607-3b5b0d5d5b1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
        }
      ]
    }
  }
}
</script>

<style scoped>
.zen-center {
  font-family: inherit;
}

.grille-articles {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

/* Responsive design */
@media (max-width: 768px) {
  .grille-articles {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }
  
  .zen-center > h1 {
    font-size: 1.5rem;
  }
}
</style>
