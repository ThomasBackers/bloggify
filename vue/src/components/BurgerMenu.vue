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
  width: 1.5rem;
  padding: 0;
  display: flex;
  flex-wrap: wrap;

  &__bar {
    position: relative;
    background-color: $lightest-color;
    width: 100%;
    height: 2px;
    margin: 1.5px 0;
  }
}

// OPENING ANIMATION
@keyframes openingTopBar {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(3px);
  }
}

@keyframes openingBottomBar {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-3px);
  }
}
</style>
