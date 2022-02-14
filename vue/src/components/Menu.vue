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

    <a class="menu__corner bottom-left" href="/playlist">
      playlist
    </a>

    <a class="menu__corner bottom-left hidden" href="/login">
      login
    </a>

    <a class="menu__corner bottom-right" href="/logout">
      logout
    </a>

    <a class="menu__corner bottom-right hidden" href="/register">
      register
    </a>
  </nav>
</template>

<style lang="scss">
.menu {
  position: absolute;
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
    top: 50px;
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
  100% {
    z-index: -1;
    background-color: rgba(0, 0, 0, 0);
  }
}
</style>
