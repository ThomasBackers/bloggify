<script setup>
import Form from '../components/Form.vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()

const user = {
  name: '',
  email: '',
  password: '',
  password_confirmation: ''
}

const register = () => {
  store.dispatch('register', user).then(() => {
    router.push({
      name: 'home'
    })
  })
}
</script>

<template>
  <main>
    <section class="register">
      <h2 class="register__heading">
        register
      </h2>

      <Form
        sectionName="register"
        :method="''"
        :inputs="[
          {
            label: 'email address',
            type: 'email',
            name: 'email'
          },
          {
            label: 'username',
            type: 'text',
            name: 'name'
          },
          {
            label: 'password',
            type: 'password',
            name: 'password'
          },
          {
            label: 'confirm password',
            type: 'password',
            name: 'password_confirmation'
          }
        ]"
        buttonLabel="sign up"
      />
    </section>
  </main>
</template>

<style lang="scss">
@include forms(register)
</style>
