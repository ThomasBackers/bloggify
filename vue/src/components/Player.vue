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

    <div class="player__controllers">
      <button class="player__controllers__controller" type="button">
        <fa icon="backward" />
      </button>
      
      <button class="player__controllers__controller" type="button">
        <fa icon="forward" />
      </button>
    </div>
  </section>
</template>

<style lang="scss">
.player {
  padding-bottom: 1.5rem;
  display: flex;
  flex-direction: column;

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

  &__controllers {
    padding-top: 1rem;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width: 70%;

    &__controller {
      background: none;
      font-size: 2rem;
    }
  }
}
</style>
