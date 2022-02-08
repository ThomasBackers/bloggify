<script setup>
import SocialNetworks from './SocialNetworks.vue'
import { defineProps } from 'vue'

defineProps({
  networks: Array,
  attributions: String
})
</script>

<template>
  <footer class="footer">
    <div class="container">
      <SocialNetworks
        :networks="networks"
      />

      <p class="footer__attributions">
        {{ attributions }}
      </p>
    </div>
  </footer>
</template>

<style lang="scss">
</style>
