<script setup>
import { defineProps, ref } from 'vue'
import SocialNetworks from './SocialNetworks.vue'
import Attributions from './Attributions.vue'
import Player from './Player.vue'

defineProps({
  networks: Array,
  attributions: Object
})

let isTogglerActive = false

const toggler = ref()
const cardContainer = ref()
const card = ref()
</script>

<template>
  <footer class="footer">
    <button
      class="footer__card-toggler"
      ref="toggler"
      @click="() => {
        if (!isTogglerActive) {
          toggler.style.animation = 'openingTogglerAnim .3s ease-out forwards'
          cardContainer.style.animation = 'openingContainerAnim .3s ease-out forwards'
          card.style.animation = 'openingCardAnim .3s ease-out forwards'
          isTogglerActive = true
        }
        else {
          toggler.style.animation = 'closingTogglerAnim .3s ease-out forwards'
          cardContainer.style.animation = 'closingContainerAnim .3s ease-out forwards'
          card.style.animation = 'closingCardAnim .3s ease-out forwards'
          isTogglerActive = false
        }
      }"
    >
      <fa icon="chevron-up" />
    </button>

    <div class="footer__card-container" ref="cardContainer">
      <div class="footer__card-container__card" ref="card">
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
    top: -23px;
    z-index: 1;
  }

  &__card-container {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    overflow: hidden;
    height: 42px;

    &__card {
      background-color: $lightest-color;
      color: $darkest-color;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      padding: 1.5rem 3rem 7rem 3rem;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      width: 250px;
      transform: translateY(32rem)
    }
  }
}

@keyframes openingTogglerAnim {
  0% {
    transform: rotate(0);
    background-color: $darkest-color;
    color: $lightest-color;
    opacity: 1;
  }
  100% {
    transform: rotate(180deg);
    background-color: lighten($darkest-color, 80%);
    color: darken($lightest-color, 60%);
    opacity: .5;
  }
}

@keyframes closingTogglerAnim {
  0% {
    transform: rotate(180deg);
    background-color: lighten($darkest-color, 80%);
    color: darken($lightest-color, 60%);
    opacity: .5;
  }
  100% {
    transform: rotate(0);
    background-color: $darkest-color;
    color: $lightest-color;
    opacity: 1;
  }
}

@keyframes openingContainerAnim {
  0% {
    height: 42px;
    background: rgba(0, 0, 0, 0);
  }
  80% {
    background: rgba(0, 0, 0, 0);
  }
  100% {
    height: 100%;
    background: rgba(0, 0, 0, .5);
  }
}

@keyframes closingContainerAnim {
  0% {
    height: 100%;
    background: rgba(0, 0, 0, .5);
  }
  20% {
    background: rgba(0, 0, 0, 0);
  }
  100% {
    height: 42px;
    background: rgba(0, 0, 0, 0);
  }
}

@keyframes openingCardAnim {
  0% {
    transform: translateY(32rem);
  }
  100% {
    transform: translateY(0);
  }
}

@keyframes closingCardAnim {
  0% {
    transform: translateY(0)
  }
  100% {
    transform: translateY(32rem)
  }
}
</style>
