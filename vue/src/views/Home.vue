<script setup>
import Footer from '../components/Footer.vue'
</script>

<template>
  <main></main>

  <Footer
    :networks="[
      ['youtube', '/c/TheCodeholic'],
      ['github', '/thecodeholic'],
      ['twitter', '/thecodeholic'],
    ]"
    attributions="&copy; 2022 Bloggify"
  />
</template>

<style lang="scss">
</style>
