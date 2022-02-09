<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

const APP_DATA = {
  appName: 'bloggify',
  author: 'Thomas Backers',
  currentYear: new Date().getFullYear()
}
</script>

<template>
  <Header
    :appName="APP_DATA.appName"
  />

  <router-view></router-view>

  <Footer
    :networks="[
      ['youtube', '/c/TheCodeholic'],
      ['github', '/thecodeholic'],
      ['twitter', '/thecodeholic'],
    ]"
    :attributions="{
      appName: APP_DATA.appName,
      author: APP_DATA.author,
      currentYear: APP_DATA.currentYear
    }"
  />
</template>

<style lang="scss">
</style>
