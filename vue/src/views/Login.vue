<script setup>
import Form from '../components/Form.vue'
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
            type: 'email'
          },
          {
            label: 'password',
            type: 'password'
          },
          {
            label: 'Remember me',
            type: 'checkbox'
          }
        ]"
        buttonLabel="sign in"
      />
    </section>
  </main>
</template>

<style lang="scss">
@include forms(login)
</style>
