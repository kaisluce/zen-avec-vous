<template>
  <div class="about-page">
    <AboutSection />
  </div>
</template>

<script>
import AboutSection from '@/components/About/AboutSection.vue'

export default {
  name: 'AboutView',
  components: {
    AboutSection
  }
}
</script>

<style scoped>
.about-page {
  display: flex;
  flex-direction: column;
}
</style>
