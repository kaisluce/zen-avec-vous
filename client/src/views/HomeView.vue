<template>
  <section class="home-view">
    <Header/>
    <main>
      <ZenNews/>
      <OtherNews/>
      <YouDLike />
    </main>
    <h1>Welcome to the Home View</h1>
  </section>
</template>

<script>
import Header from '@/components/header/header.vue';
import ZenNews from '@/components/home/zen-news/zen-news.vue';
import OtherNews from '@/components/home/other-news/other-news.vue';
import YouDLike from '../components/home/you-d-like/you-d-like.vue';
export default {
  components: {
    Header,
    ZenNews,
    OtherNews,
    YouDLike
  }

}
</script>

<style>
  .home-view{
    padding: 0;
    margin: 0;
    width: 100vw;
  }

  main{
    margin: 5rem;
  }

  .center-title{
    text-align: center;
    font-size: 1.75rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #0b0b0b;
    width: 50%;
    margin-top: 0;
    margin-bottom: 0.6rem;
    position: relative;
  }

  .center-title::after{
    content: "";
    display: block;
    height: 4px;
    background-color: #0b0b0b;
    margin-top: 0.5rem;
  }
</style>