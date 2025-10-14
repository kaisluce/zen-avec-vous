<template>
  <section class="other-news">
    <h1>LE RESTE DE L'ACTU</h1>
    
    <div class="layout">
      <!-- Article principal (index 0) -->
      <div class="main-article">
        <ArticlePrincipal :article="articles[0]" />
      </div>
      
      <!-- Grille d'articles secondaires (index ≥ 1) -->
      <div class="secondary-articles">
        <Article 
          v-for="article in articles.slice(1)" 
          :key="article.id" 
          :article="article" 
        />
      </div>
    </div>
  </section>
</template>

<script>
import ArticlePrincipal from '@/components/home/zen-news/zen-center/article-principal.vue';
import Article from '@/components/home/other-news/article.vue';

export default {
  components: {
    ArticlePrincipal,
    Article
  },
  data() {
    return {
      articles: [
        {
          id: 1,
          title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
          type: 'actualités',
          date: '2025-01-15',
          image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
          id: 2,
          title: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
          type: 'à la une',
          date: '2025-01-14',
          image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
        },
        {
          id: 3,
          title: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
          type: 'news',
          date: '2025-01-13',
          image: 'https://images.unsplash.com/photo-1506629905607-3b5b0d5d5b1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
        },
        {
          id: 4,
          title: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum',
          type: 'actualités',
          date: '2025-01-12',
          image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
        },
        {
          id: 5,
          title: 'Excepteur sint occaecat cupidatat non proident sunt in culpa qui',
          type: 'à la une',
          date: '2025-01-11',
          image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
        },
        {
          id: 6,
          title: 'Officia deserunt mollit anim id est laborum et dolorum fuga',
          type: 'news',
          date: '2025-01-10',
          image: 'https://images.unsplash.com/photo-1506629905607-3b5b0d5d5b1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
        }
      ]
    }
  }
}
</script>

<style scoped>
.other-news {
  font-family: inherit;
  margin-top: 3rem;
}

.other-news > h1 {
  font-size: 1.75rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #0b0b0b;
  margin-bottom: 0.6rem;
  position: relative;
}

.other-news > h1::after {
  content: "";
  display: block;
  height: 4px;
  background-color: #0b0b0b;
  margin-top: 0.5rem;
}

.layout {
  display:inline-flex;
  gap: 2rem;
  margin-top: 2rem;
}

.main-article {
  min-width: 33vw;
  aspect-ratio: 1/1 ;
}

.secondary-articles {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  align-content: start;
}

/* Responsive design */
@media (max-width: 960px) {
  .layout {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .secondary-articles {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}

@media (max-width: 768px) {
  .other-news {
    margin-top: 2rem;
  }
  
  .other-news > h1 {
    font-size: 1.5rem;
  }
  
  .layout {
    margin-top: 1.5rem;
  }
}
</style>
