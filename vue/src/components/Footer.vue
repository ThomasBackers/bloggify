<script setup>
import SocialNetworks from './SocialNetworks.vue'
</script>

<template>
  <footer class="footer">
    <div class="container">
      <SocialNetworks
        :networks="[
          ['youtube', '/c/TheCodeholic'],
          ['github', '/thecodeholic'],
          ['twitter', '/thecodeholic'],
        ]"
      />

      <p class="footer__attributions"></p>
    </div>
  </footer>
</template>

<style lang="scss">
</style>
