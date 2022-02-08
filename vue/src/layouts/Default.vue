<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

const data = {
  appName: 'bloggify',
  author: 'Thomas Backers',
  currentYear: new Date().getFullYear()
}
</script>

<template>
  <Header
    :appName="data.appName"
  />

  <router-view></router-view>

  <Footer
    :networks="[
      ['youtube', '/c/TheCodeholic'],
      ['github', '/thecodeholic'],
      ['twitter', '/thecodeholic'],
    ]"
    :attributions="{
      appName: data.appName,
      author: data.author,
      currentYear: data.currentYear
    }"
  />
</template>

<style lang="scss">
</style>
