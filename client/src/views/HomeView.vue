<template>
  <section class="home-view">
    <Header/>
    <main>
      <ZenNews/>
    </main>
    <h1>Welcome to the Home View</h1>
  </section>
</template>

<script>
import Header from '@/components/header/header.vue';
import ZenNews from '@/components/home/zen-news/zen-news.vue';
export default {
  components: {
    Header,
    ZenNews,
  }

}
</script>

<style>

</style>