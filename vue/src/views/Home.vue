<script setup>
import LatestSongs from '../components/LatestSongs.vue'
</script>

<template>
  <main class="home">
    <LatestSongs />
  </main>
</template>

<style lang="scss">
.home {
  margin: auto;
  width: 300px;
  height: 300px;
}

@media all and (min-device-width: 450px) {
 .home {
   width: 420px;
   height: 420px;
 }
}
</style>
