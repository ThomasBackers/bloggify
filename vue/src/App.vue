<script setup>
import Header from './components/Header.vue'

// import { useStore } from 'vuex'
// import { computed } from 'vue'

// const store = useStore()
// const user = computed(() => store.state.user)
</script>

<template>
  <Header />

  <!-- <pre>{{ user.data.name }}</pre> -->

  <img alt="Vue logo" src="./assets/logo.png" />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
