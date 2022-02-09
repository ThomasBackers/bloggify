<script setup>

</script>

<template>
  <a class="welcome" href="/latest-songs">
    <ul class="welcome__messages">
      <li class="welcome__messages__message one">
        it's not about music
      </li>

      <li class="welcome__messages__message two invisible">
        it's about traveling through artists galaxies
      </li>

      <li class="welcome__messages__message three invisible">
        click here to become a space traveler
      </li>
    </ul>
  </a>
</template>

<style lang="scss">
.welcome {
  overflow: hidden;
  margin: 0;
  width: 100%;
  height: 100%;

  &__messages {
    padding: 0;
    width: 100%;
    height: 100%;
    margin: 0;

    &__message {
      position: absolute;
    }

    .invisible {
      z-index: -1;
    }
  }
}
</style>
