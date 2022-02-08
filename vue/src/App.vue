<script setup>
import 'normalize.css'
// import { useStore } from 'vuex'
// import { computed } from 'vue'

// const store = useStore()
// const user = computed(() => store.state.user)
</script>

<template>
  <router-view></router-view>
  <!-- <pre>{{ user.data.name }}</pre> -->
</template>

<style lang="scss">
/*
As stylesheets stored in 'assets/sass/abstracts'
are supposed to be global they're accessible in
the whole application through preprocessorOptions
in vite.config.js
*/

// PRESETS
:root {
  // Typography
  font-size: 16px;
  color: #FFF;
  
  // Base
  ul {
    list-style-type: none;
  }

  a {
    display: inline-block;
  }

  button {
    background: none;
    border: none;
  }
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
  background-color: #000;
}
</style>
