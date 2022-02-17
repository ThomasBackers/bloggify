<script setup>
import 'normalize.css'
</script>

<template>
  <router-view></router-view>
</template>

<style lang="scss">
// As stylesheets stored in 'assets/sass/'
// are supposed to be global they're accessible in
// the whole application through preprocessorOptions
// in vite.config.js

// PRESETS
:root {
  // Typography
  font-size: 16px;
  color: $lightest-color;
  font-family: $main-font;
  
  // Base
  ul {
    list-style-type: none;
  }

  a {
    text-decoration: none;
  }

  button {
    border: none;
    cursor: pointer;
  }

  .container {
    width: 78%;
    margin: 0 auto;
  }

  .hidden {
    display: none;
  }
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: $darkest-color;
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
</style>
