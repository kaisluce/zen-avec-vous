<template>
  <section class="app">
    <router-view/>
  </section>
</template>

<style>
html, body {
  margin: 0;
  padding: 0;
}

*{
  font-family: "Manrope", sans-serif;
}

.app{
  padding: 0;
  margin: 0;
  width: 100%;
}

:root{
  --black: #000000;
  --primary-blue: #00aaff;
  --secondary-blue: #008ad0;
  --lightest: #ffffff;
  --light: #f0f0f3;
  --lightv: #d9f2ff;
}
</style>
