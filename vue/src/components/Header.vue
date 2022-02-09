<script setup>
import { defineProps } from 'vue'
import BurgerMenu from './BurgerMenu.vue'

defineProps({
  appName: String
})
</script>

<template>
  <header class="header">
    <div class="container">
      <h1 class="header__heading hidden">
        {{ appName }}
      </h1>

      <a class="header__home-link" href="/">
        <img
          class="header__home-link__logo"
          src="../assets/images/logo.svg"
          :alt="`${appName} logo`"
        />
      </a>

      <BurgerMenu />
    </div>
  </header>
</template>

<style lang="scss">
.header {
  padding-top: 1.5rem;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__home-link {
    width: 50%;
    max-width: 140px;
    display: flex;
    align-items: center;

    &__logo {
      width: 100%;
    }
  }
}
</style>
