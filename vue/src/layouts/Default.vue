<script setup>
import Header from '../components/Header.vue'
import Menu from '../components/Menu.vue'
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

  <Menu />

  <router-view></router-view>

  <Footer
    :networks="[
      ['github', '/ThomasBackers'],
      ['linkedin', '/in/thomas-backers-54197621b'],
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
