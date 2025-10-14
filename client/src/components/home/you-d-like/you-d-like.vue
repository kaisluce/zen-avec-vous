<template>
    <div class="you-d-like">
        <h1 class="center-title">
            vous allez aimer
        </h1>
        <div class="articles">
            <Article 
                v-for="article in articles" 
                :key="article.id" 
                :article="article" 
            />
        </div>
    </div>
</template>

<script>
import Article from './article.vue';
export default {
    components: {
        Article,
    },
    data() {
        return {
            articles: [
                {
                    id: 1,
                    title: 'Découvrez 5 recettes légères pour un dîner d\'été réussi',
                    type: 'À la une',
                    image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=400&q=80'
                },
                {
                    id: 2,
                    title: 'Comment optimiser votre potager urbain en 2025',
                    type: 'Actualités',
                    image: 'https://images.unsplash.com/photo-1498654077810-12c21d4d7d4a?auto=format&fit=crop&w=400&q=80'
                },
                {
                    id: 3,
                    title: '10 idées d\'activités bien-être à faire en famille',
                    type: 'News',
                    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=400&q=80'
                },
                {
                    id: 4,
                    title: 'Les secrets d\'un sommeil réparateur durant l\'été',
                    type: 'Actualités',
                    image: 'https://images.unsplash.com/photo-1511296265589-0adf7e0837b8?auto=format&fit=crop&w=400&q=80'
                }
            ]
        }
    }
}
</script>

<style scoped>
.you-d-like{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.articles{
    margin: 2rem 0;
    width: 100%;
    max-width: 1200px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
        gap: 1.5rem;
        justify-content: center;
        align-items: start;
    }

    /* Responsive design */
@media (max-width: 960px) {
    .articles{
        grid-template-columns: repeat(2, 1fr);
        gap: 1.25rem;
    }
    
    .center-title{
        max-width: 640px;
    }
}

@media (max-width: 600px) {
    .articles{
        grid-template-columns: 1fr;
            gap: 1rem;
        }
        
        .center-title{
            font-size: 1.5rem;
        }
}
</style>
