<script setup>
import { defineProps } from 'vue'
import SocialNetworks from './SocialNetworks.vue'
import Attributions from './Attributions.vue'

defineProps({
  networks: Array,
  attributions: Object
})
</script>

<template>
  <footer class="footer">
      <SocialNetworks
        :networks="networks"
      />

      <Attributions
        :appName="attributions.appName"
        :author="attributions.author"
        :currentYear="attributions.currentYear"
      />
  </footer>
</template>

<style lang="scss">
</style>
