<script setup>
import { defineProps } from 'vue'

defineProps({
  networks: Array
})
</script>

<template>
  <ul class="social-networks">
    <li
      class="social-networks__network"
      v-for="(network, i) of networks"
      :key="i"
    >
      <a :href="`https://${network[0]}.com${network[1]}`">
        {{ network[0] }}
      </a>
    </li>
  </ul>
</template>

<style lang="scss">
  .social-networks {
    margin: 0;
    padding: 0;

    &__network {
      a {
        color: $darkest-color;
        text-transform: uppercase;
        font-size: .8rem;
      }
    }
  }
</style>
