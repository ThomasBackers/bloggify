<script setup>
import Footer from '../components/Footer.vue'

const data = {
  currentYear: new Date().getFullYear()
}
</script>

<template>
  <router-view></router-view>

  <Footer
    :networks="[
      ['youtube', '/c/TheCodeholic'],
      ['github', '/thecodeholic'],
      ['twitter', '/thecodeholic'],
    ]"
    :attributions="`&copy; ${data.currentYear} Bloggify`"
  />
</template>

<style lang="scss">
</style>
