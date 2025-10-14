<template>
    <section class="article">
        <div class="date">{{ formattedDate }}</div>
        <div class="content">
            <span class="type">{{ article.type }}</span>
            {{ article.title }}
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
.article {
    color: var(--black);
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
}

.date {
    font-size: 15px;
    font-weight: 400;
    line-height: 1.6;
}

.content {
    font-size: 18px;
    font-weight: 700;
    line-height: 1.6;
}

.type {
    color: var(--primary-blue);
    font-weight: 500;
    display: inline-block;
    margin-right: 0.3rem;
}
</style>
