<script setup>
</script>

<template>
  <section class="latest-songs">
    <h2 class="lastest-songs__heading hidden">
      latest songs
    </h2>

    <ul class="latest-songs__carousel">
      <li class="latest-songs__carousel__slide">
        <a class="latest-songs__carousel__slide__link" href="/article">
          <img
          src="../assets/images/R-7522325-1443217882-7037.jpg"
          alt=""
          class="latest-songs__carousel__slide__link__cover"
          >
        </a>
      </li>

      <li class="latest-songs__carousel__slide">
        <a class="latest-songs__carousel__slide__link" href="/article">
          <img
          src="../assets/images/R-8918290-1471448891-6032.jpg"
          alt=""
          class="latest-songs__carousel__slide__link__cover"
          >
        </a>
      </li>

      <li class="latest-songs__carousel__slide">
        <a class="latest-songs__carousel__slide__link" href="/article">
          <img
          src="../assets/images/R-10589554-1501793748-4188.jpg"
          alt=""
          class="latest-songs__carousel__slide__link__cover"
          >
        </a>
      </li>

      <li class="latest-songs__carousel__slide">
        <a class="latest-songs__carousel__slide__link" href="/article">
          <img
          src="../assets/images/R-4787580-1617740790-6552.jpg"
          alt=""
          class="latest-songs__carousel__slide__link__cover"
          >
        </a>
      </li>

      <li class="latest-songs__carousel__slide">
        <a class="latest-songs__carousel__slide__link" href="/article">
          <img
          src="../assets/images/R-10821533-1504871036-3577.jpg"
          alt=""
          class="latest-songs__carousel__slide__link__cover"
          >
        </a>
      </li>
    </ul>
  </section>
</template>

<style lang="scss">
.latest-songs {
  width: 100%;
  height: 100%;
  overflow: hidden;

  &__carousel {
    padding: 0;
    margin: 0;
    display: flex;
    width: 500%;
    height: 100%;
    animation: autoScroll 20s alternate infinite;

    &__slide {
      width: 20%;
      height: 100%;

      &__link {
        width: 100%;
        height: 100%;
        display: block;

        &__cover {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}

@keyframes autoScroll {
  0% {
    transform: translateX(0%)
  }
  11.11% {
    transform: translateX(0%)
  }
  22.22% {
    transform: translateX(-20%)
  }
  33.33% {
    transform: translateX(-20%)
  }
  44.44% {
    transform: translateX(-40%)
  }
  55.55% {
    transform: translateX(-40%)
  }
  66.66% {
    transform: translateX(-60%)
  }
  77.77% {
    transform: translateX(-60%)
  }
  88.88% {
    transform: translateX(-80%)
  }
  100% {
    transform: translateX(-80%)
  }
}
</style>
