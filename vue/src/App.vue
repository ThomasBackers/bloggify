<script setup>
import 'normalize.css'
import Home from './views/Home.vue'

// import { useStore } from 'vuex'
// import { computed } from 'vue'

// const store = useStore()
// const user = computed(() => store.state.user)
</script>

<template>
  <Home />
  <!-- <pre>{{ user.data.name }}</pre> -->
</template>

<style lang="scss">
/*
As stylesheets stored in 'assets/sass/abstracts'
are supposed to be global they're accessible in
the whole application through preprocessorOptions
in vite.config.js
*/

:root {
  font-size: 16px;
}

.container {
  width: 90%;
  max-width: 1440px;
}

ul {
  list-style-type: none;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
