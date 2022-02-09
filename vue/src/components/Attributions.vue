<script setup>
import { defineProps } from 'vue'

defineProps({
  appName: String,
  author: String,
  currentYear: Number
})
</script>

<template>
  <div class="attributions">
    <p class="attributions__copyright">
      &copy;
      {{ currentYear }}
      <span class="attributions__copyright__app-name">
        {{ appName }}
      </span>
    </p>

    <a class="attributions__author" href="/about">
      Built by {{ author }}
    </a>
  </div>
</template>

<style lang="scss">
</style>
