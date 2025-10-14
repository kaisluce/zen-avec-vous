<template>
    <section class="article">
        <div class="image-container">
            <img :src="article.image" :alt="article.title" />
        </div>
        <div class="content">
            <span class="type">{{ article.type }}</span>
            <span class="title">{{ article.title }}</span>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        article :{
            type : Object,
            required : true
        }
    }
}
</script>

<style scoped>
    .article{
        display: flex;
        flex-direction: column;
        width: 100%;
        margin: 0;
        gap: 0.75rem;
    }

    .image-container{
        width: 100%;
        aspect-ratio: 4/3;
        overflow: hidden;
    }

    .image-container img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .content{
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    .type{
        color: var(--primary-blue);
        font-weight: 500;
    }

    .title{
        font-size: 16px;
        line-height: 1.4;
        font-weight: 700;
        color: var(--black);
        margin: 0;
    }
</style>