<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

const data = {
  appName = 'bloggify',
  currentYear: new Date().getFullYear()
}

const methods = {
  capitalize() {},
}
</script>

<template>
  <Header
    :appName="appName"
  />

  <router-view></router-view>

  <Footer
    :networks="[
      ['youtube', '/c/TheCodeholic'],
      ['github', '/thecodeholic'],
      ['twitter', '/thecodeholic'],
    ]"
    :attributions="`&copy; ${data.currentYear} ${appName}`"
  />
</template>

<style lang="scss">
</style>
