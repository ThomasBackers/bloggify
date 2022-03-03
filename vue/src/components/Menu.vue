<script setup>
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { computed, ref, watchEffect } from 'vue'

const store = useStore()
const router = useRouter()
const menu = computed(() => store.state.menu)
const user = computed(() => store.getters.getUser)

const nav = ref(null)
const list = ref(null)
const profile = ref(null)
const playlist = ref(null)
const login = ref(null)
const logout = ref(null)
const register = ref(null)

const launchAnim = anim => {
  if (anim === 'opening') {
    nav.value.style.animation = 'openingMenuAnim .2s ease-out forwards'
    list.value.style.animation = 'openingListAnim .2s ease-out forwards'
    profile.value.style.animation = 'openingCornerAnim .2s ease-out forwards'
    playlist.value.style.animation = 'openingCornerAnim .2s ease-out forwards'
    login.value.style.animation = 'openingCornerAnim .2s ease-out forwards'
    logout.value.style.animation = 'openingCornerAnim .2s ease-out forwards'
    register.value.style.animation = 'openingCornerAnim .2s ease-out forwards'
  } else if (anim === 'closing') {
    nav.value.style.animation = 'closingMenuAnim .2s ease-out forwards'
    list.value.style.animation = 'closingListAnim .2s ease-out forwards'
    profile.value.style.animation = 'closingCornerAnim .2s ease-out forwards'
    playlist.value.style.animation = 'closingCornerAnim .2s ease-out forwards'
    login.value.style.animation = 'closingCornerAnim .2s ease-out forwards'
    logout.value.style.animation = 'closingCornerAnim .2s ease-out forwards'
    register.value.style.animation = 'closingCornerAnim .2s ease-out forwards'
  }
}

const logoutUser = () => {
  store.dispatch('logout').then(
    res => router.push({ name: 'home' })
  )
}

watchEffect(() => {
  if (menu.value.isOpen && menu.value.alreadyBeenUsed) {
    launchAnim('opening')
  } else if (menu.value.alreadyBeenUsed) {
    launchAnim('closing')
  }
})
</script>

<template>
  <nav class="menu" ref="nav">
    <ul class="menu__list" ref="list">
      <li class="menu__list__element">
        <a class="menu__list__element__link" href="/about">
          about
        </a>
      </li>

      <li class="menu__list__element">
        <a class="menu__list__element__link" href="/news">
          news
        </a>
      </li>

      <li class="menu__list__element">
        <a class="menu__list__element__link" href="/music">
          music
        </a>
      </li>

      <li class="menu__list__element">
        <a class="menu__list__element__link" href="/contact">
          contact
        </a>
      </li>
    </ul>

    <a 
      :class="user.token ? 'menu__corner top-left' : 'hidden'"
      href="/profile"
      ref="profile"
    >
      profile
    </a>

    <a 
      :class="user.token ? 'menu__corner bottom-left' : 'hidden'"
      href="/playlist"
      ref="playlist"
    >
      playlist
    </a>

    <a 
      :class="!user.token ? 'menu__corner bottom-left' : 'hidden'"
      href="/login"
      ref="login"
    >
      login
    </a>

    <a 
      :class="user.token ? 'menu__corner bottom-right' : 'hidden'"
      @click="logoutUser"
      ref="logout"
    >
      logout
    </a>

    <a 
      :class="!user.token ? 'menu__corner bottom-right' : 'hidden'"
      href="/register"
      ref="register"
    >
      register
    </a>
  </nav>
</template>

<style lang="scss">
.menu {
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  z-index: -1;

  a {
    color: $lightest-color;

    &:visited {
      color: $lightest-color;
    }
  }

  &__list {
    padding: 0;
    margin: auto;
    text-align: center;

    &__element {
      margin-bottom: .5rem;

      &__link {
        text-transform: uppercase;
        font-size: 1.6rem;
      }
    }
  }

  &__corner {
    position: absolute;
    text-transform: uppercase;
    font-size: .9rem;
    letter-spacing: .1rem;
  }

  .top-left {
    top: 64px;
    left: 11%;
  }

  .bottom-left {
    bottom: 50px;
    left: 11%;
  }

  .bottom-right {
    bottom: 50px;
    right: 11%;
  }
}

@keyframes openingMenuAnim {
  0% {
    z-index: -1;
    background-color: rgba(0, 0, 0, 0);
  }
  1% {
    z-index: 1;
  }
  100% {
    z-index: 1;
    background-color: rgba(0, 0, 0, .8);
  }
}

@keyframes closingMenuAnim {
  0% {
    z-index: 1;
    background-color: rgba(0, 0, 0, .8);
  }
  99% {
    z-index: 1;
  }
  100% {
    z-index: -1;
    background-color: rgba(0, 0, 0, 0);
  }
}

@keyframes openingListAnim {
  0% {
    opacity: 0;
    transform: translateY(-15px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes closingListAnim {
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(-15px);
  }
}

@keyframes openingCornerAnim {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes closingCornerAnim {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
