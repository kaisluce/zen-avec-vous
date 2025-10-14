<template>
    <section class="article">
        <div class="content">
            <span class="type">{{ article.type }}</span>
            <h3 class="title">{{ article.title }}</h3>
        </div>
        <div class="image-container">
            <img :src="article.image" :alt="article.title" />
        </div>
    </section>
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
    gap: 1rem;
    margin-bottom: 1.5rem;
}

.content {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.type {
    color: var(--primary-blue);
    font-weight: 500;
    display: inline-block;
    font-size: 0.9rem;
    text-decoration: none;
}

.title {
    font-size: 18px;
    font-weight: 700;
    color: var(--black);
    line-height: 1.6;
    margin: 0;
}

.image-container {
    flex-shrink: 0;
    width: 96px;
    height: 96px;
}

.image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
}

/* Responsive design */
@media (max-width: 768px) {
    .article {
        gap: 0.75rem;
        margin-bottom: 1.25rem;
    }
    
    .image-container {
        width: 80px;
        height: 80px;
    }
    
    .title {
        font-size: 16px;
    }
}
</style>
