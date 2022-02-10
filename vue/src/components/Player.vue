<script setup>
</script>

<template>
  <section class="player">
    <h3 class="player__heading">
      player
    </h3>

    <iframe
      class="player__video"
      src="https://www.youtube-nocookie.com/embed/IvV6vrYjIgM"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </section>
</template>

<style lang="scss">
.player {
  padding-bottom: 1.5rem;

  &__heading {
    text-transform: uppercase;
    font-size: .8rem;
    font-weight: 400;
    margin: 0;
    padding-bottom: .5rem;
    color: lighten($darkest-color, 55%);
  }

  &__video {
    width: 100%;
    height: 12rem;
    border-radius: 5px;
  }
}
</style>
