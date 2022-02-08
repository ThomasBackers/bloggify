<script setup>
defineProps({
  appName: String
})
</script>

<template>
  <header class="header">
    <h1 class="header__heading">
      {{ appName }}
    </h1>
  </header>
</template>

<style>
</style>
