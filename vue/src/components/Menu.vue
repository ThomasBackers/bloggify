<script setup>
</script>

<template>
  <nav class="menu">
    <ul class="menu__list">
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

    <a class="menu__corner top-left" href="/user-slug">
      profile
    </a>

    <a class="menu__corner bottow-left" href="/playlist">
      playlist
    </a>

    <a class="menu__corner bottow-left hidden" href="/login">
      login
    </a>

    <a class="menu__corner bottow-right" href="/logout">
      logout
    </a>

    <a class="menu__corner bottow-right hidden" href="/register">
      register
    </a>
  </nav>
</template>

<style lang="scss">
.menu {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0);

  &__corner {
    position: absolute;
  }

  .top-left {}

  .bottom-left {}

  .bottom-right {}
}
</style>
