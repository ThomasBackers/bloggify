<script setup>
defineProps({
  networks: Array
})
</script>

<template>
  <section class="social-networks">
    <h3 class="social-networks__heading">
      socials
    </h3>

    <ul class="social-networks__list">
      <li
        class="social-networks__list__network"
        v-for="(network, i) of networks"
        :key="i"
      >
        <a :href="`https://${network[0]}.com${network[1]}`">
          {{ network[0] }}
        </a>
      </li>
    </ul>
  </section>
</template>

<style lang="scss">
  .social-networks {
    padding-bottom: 2rem;

    &__heading {
      text-transform: uppercase;
      font-size: .8rem;
      font-weight: 400;
      margin: 0;
      padding-bottom: .15rem;
      color: lighten($darkest-color, 55%);
    }

    &__list {
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
  }
</style>
