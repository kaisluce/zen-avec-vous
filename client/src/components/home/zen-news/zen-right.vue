<template>
  <section class="zen-right">
    <Article v-for="article in articles" :key="article.id" :article="article"/>
  </section>
</template>

<script>
import Article from '@/components/home/zen-news/zen-right/article.vue';
export default {
    components: {
        Article
    },
    data() {
        return {
            articles: [
                {
                    id: 1, 
                    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', 
                    type: 'A la une.',
                    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
                },
                {
                    id: 2, 
                    title: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', 
                    type: 'News.',
                    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
                },
                {
                    id: 3, 
                    title: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco', 
                    type: 'Actualités.',
                    image: 'https://images.unsplash.com/photo-1506629905607-3b5b0d5d5b1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
                },
                {
                    id: 4, 
                    title: 'Duis aute irure dolor in reprehenderit in voluptate velit esse', 
                    type: 'A la une.',
                    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
                },
                {
                    id: 5, 
                    title: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa', 
                    type: 'News.',
                    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
                },
                {
                    id: 6, 
                    title: 'Qui officia deserunt mollit anim id est laborum', 
                    type: 'Actualités.',
                    image: 'https://images.unsplash.com/photo-1506629905607-3b5b0d5d5b1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
                }
            ]
        }
    }
}
</script>

<style scoped>
.zen-right {
    font-family: inherit;
}
</style>