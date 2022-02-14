<script setup>
import { ref } from 'vue'

let isMenuOpen = false

const topBar = ref()
const midBar = ref()
const bottomBar = ref()

const assignAnim = (eltRef, animName) => {
  eltRef.style.animation = `${animName} .2s ease-out forwards`
}
</script>

<template>
  <button
    class="burger-menu"
    type="button"
    @click="() => {
      if (!isMenuOpen) {
        assignAnim(topBar, 'openingTopBar')
        assignAnim(midBar, 'openingMidBar')
        assignAnim(bottomBar, 'openingBottomBar')
        isMenuOpen = true
      } else {
        assignAnim(topBar, 'closingTopBar')
        assignAnim(midBar, 'closingMidBar')
        assignAnim(bottomBar, 'closingBottomBar')
        isMenuOpen = false
      }
    }"
  >
    <div class="burger-menu__bar" ref="topBar"></div>

    <div class="burger-menu__bar" ref="midBar"></div>

    <div class="burger-menu__bar" ref="bottomBar"></div>
  </button>
</template>

<style lang="scss">
.burger-menu {
  width: 1.5rem;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  padding: 0.3rem 0;
  background: none;
  position: relative;
  z-index: 1;

  &__bar {
    background-color: $lightest-color;
    width: 100%;
    height: 2px;
    margin: 1.5px 0;
  }
}

// OPENING ANIMATION
@keyframes openingTopBar {
  0% {
    transform: translateY(0) rotate(0);
  }
  50% {
    transform: translateY(5px) rotate(0);
  }
  100% {
    transform: translateY(5px) rotate(45deg);
  }
}

@keyframes openingMidBar {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

@keyframes openingBottomBar {
  0% {
    transform: translateY(0) rotate(0);
  }
  50% {
    transform: translateY(-5px) rotate(0);
  }
  100% {
    transform: translateY(-5px) rotate(135deg);
  }
}

// CLOSING ANIMATION
@keyframes closingTopBar {
  0% {
    transform: translateY(5px) rotate(45deg);
  }
  50% {
    transform: translateY(5px) rotate(0);
  }
  100% {
    transform: translateY(0) rotate(0);
  }
}

@keyframes closingMidBar {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes closingBottomBar {
  0% {
    transform: translateY(-5px) rotate(135deg);
  }
  50% {
    transform: translateY(-5px) rotate(0);
  }
  100% {
    transform: translateY(0) rotate(0);
  }
}

@media all and (min-device-width: 450px) {
 .burger-menu {
    position: absolute;
    right: 11%;
 }
}

@media all and (min-device-width: 768px) {
 .burger-menu {
    display: none;
 }
}
</style>
