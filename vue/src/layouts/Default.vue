<script setup>
import { defineProps, ref } from 'vue'
import Header from '../components/Header.vue'
import Menu from '../components/Menu.vue'
import Footer from '../components/Footer.vue'

const APP_DATA = {
  appName: 'bloggify',
  author: 'Thomas Backers',
  currentYear: new Date().getFullYear()
}

const isMenuHidden = ref(true)
</script>

<template>
  <Header
    :appName="APP_DATA.appName"
    :isMenuHidden="isMenuHidden"
  />

  <Menu :isMenuHidden="isMenuHidden" />

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
