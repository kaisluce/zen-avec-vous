<template>
  <section class="zen-left">
    <h1>LES ACTUALITÉS ZEN</h1>
    <Article v-for="article in articles" :key="article.id" :article="article"/>
  </section>
</template>

<script>
import Article from '@/components/home/zen-news/zen-left/article.vue';
export default {
    components: {
        Article
    },
    data() {
        return {
            articles: [
                {id: 1, title: 'Article 1', date: '2025-01-01', type: 'à la une', content: 'Content 1'},
                {id: 2, title: 'Article 2', date: '2025-01-02', type: 'à la une', content: 'Content 2'},
                {id: 3, title: 'Article 3', date: '2025-01-03', type: 'news', content: 'Content 3'},
                {id: 4, title: 'Article 4', date: '2025-01-04', type: 'à la une', content: 'Content 4'},
                {id: 5, title: 'Article 5', date: '2025-01-05', type: 'actualités', content: 'Content 5'},
                {id: 6, title: 'Article 6', date: '2025-01-06', type: 'news', content: 'Content 6'},
                {id: 7, title: 'Article 7', date: '2025-01-07', type: 'à la une', content: 'Content 7'},
                {id: 8, title: 'Article 8', date: '2025-01-08', type: 'à la une', content: 'Content 8'},
            ]
        }
    }

}
</script>

<style scoped>
.zen-left {
    font-family: inherit;
}

.zen-left > h1 {
    font-size: 1.75rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #0b0b0b;
    margin-top: 0;
    margin-bottom: 0.6rem;
    position: relative;
}

.zen-left > h1::after {
    content: "";
    display: block;
    height: 4px;
    background-color: #0b0b0b;
    margin-top: 0.5rem;
}
</style>
