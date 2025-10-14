<template>
  <section class="zen-news">
    <ZenLeft/>
    <zenCenter/>
    <ZenRight/>
  </section>
</template>

<script>
import ZenLeft from '@/components/home/zen-news/zen-left.vue';
import zenCenter from '@/components/home/zen-news/zen-center.vue';
import ZenRight from '@/components/home/zen-news/zen-right.vue';
export default {
  components: {
    ZenLeft,
    zenCenter,
    ZenRight,
  }
}
</script>

<style scoped>
.zen-news {
  display: flex;
  gap: 2rem;
  width: 100%;
}

.zen-news > * {
  flex: 1;
  min-width: 0; /* Permet aux éléments de se rétrécir si nécessaire */
}

/* Responsive design */
@media (max-width: 768px) {
  .zen-news {
    flex-direction: column;
    gap: 1.5rem;
  }
  
  .zen-news > * {
    flex: none;
    width: 100%;
  }
}

@media (max-width: 480px) {
  .zen-news {
    gap: 1rem;
  }
}
</style>