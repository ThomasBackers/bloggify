<script setup>
import Form from '../components/Form.vue'

import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()

const logs = {
  name: '',
  email: '',
  remember: ''
}

const login = () => {}
</script>

<template>
  <main>
    <section class="login">
      <h2 class="login__heading">
        login
      </h2>

      <Form
        sectionName="login"
        :inputs="[
          {
            label: 'email address',
            type: 'email',
            name: 'email'
          },
          {
            label: 'password',
            type: 'password',
            name: 'password'
          },
          {
            label: 'Remember me',
            type: 'checkbox',
            name: 'remember'
          }
        ]"
        buttonLabel="sign in"
        :fillables="logs"
        @submitFillables="login"
      />
    </section>
  </main>
</template>

<style lang="scss">
@include forms(login)
</style>
