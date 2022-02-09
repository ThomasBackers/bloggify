<script setup>
</script>

<template>
  <button
    class="burger-menu"
    type="button"
    @click="() => {}"
  >
    <div class="burger-menu__bar"></div>

    <div class="burger-menu__bar"></div>

    <div class="burger-menu__bar"></div>
  </button>
</template>

<style lang="scss">
.burger-menu {
  width: 1.2rem;
  padding: 0;
  display: flex;
  flex-wrap: wrap;

  &__bar {
    background-color: $lightest-color;
    width: 100%;
    height: 2px;
    margin: 1.5px 0;
  }
}
</style>
