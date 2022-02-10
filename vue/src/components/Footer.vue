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
    <button class="footer__card-toggler">
      <fa icon="chevron-up" />
    </button>

    <div class="footer__card">
      <SocialNetworks
        :networks="networks"
      />

      <Attributions
        :appName="attributions.appName"
        :author="attributions.author"
        :currentYear="attributions.currentYear"
      />
    </div>
  </footer>
</template>

<style lang="scss">
.footer {
  &__card-toggler {
    background-color: $lightest-color;
    padding: 1rem;
    border-radius: 50%;
    margin: 0 auto;
    width: 50.4px;
  }
}
</style>
