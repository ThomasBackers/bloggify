<script setup>
import BurgerMenu from './BurgerMenu.vue'

defineProps({
  appName: String
})
</script>

<template>
  <header class="header">
    <h1 class="header__heading">
      {{ appName }}
    </h1>

    <BurgerMenu />
  </header>
</template>

<style lang="scss">
.header {
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  &__heading {
    margin: 0;
  }
}
</style>
