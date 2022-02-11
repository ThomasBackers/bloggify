<script setup>
import { defineProps } from 'vue'
import SocialNetworks from './SocialNetworks.vue'
import Attributions from './Attributions.vue'
import Player from './Player.vue'

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

    <div class="footer__card container">
      <Player />

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
  font-family: $main-font;
  text-align: center;
  height: 67px;

  &__card-toggler {
    background-color: $darkest-color;
    color: $lightest-color;
    padding: 1rem;
    border-radius: 50%;
    margin: 0 auto;
    width: 50.4px;
    position: relative;
    top: -55px;
    z-index: 1;
  }

  &__card {
    background-color: $lightest-color;
    color: $darkest-color;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    padding: 1.5rem 3rem 3rem 3rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    position: absolute;
    overflow: hidden;
    width: 250px;
    bottom: 0;
    left: 11%;
    height: 1rem;
  }
}

@keyframes togglerAnim {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(180deg);
  }
}
</style>
