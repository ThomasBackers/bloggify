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
  width: 14px;
  padding: 0;
  display: flex;
  flex-wrap: wrap;

  &__bar {
    background-color: #FFF;
  }
}
</style>
