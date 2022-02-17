<script setup>
import Form from '../components/Form.vue'
</script>

<template>
  <main>
    <section class="register">
      <h2 class="register__heading">
        register
      </h2>

      <Form
        sectionName="register"
        :inputs="[
          {
            label: 'email address',
            type: 'email'
          },
          {
            label: 'username',
            type: 'text'
          },
          {
            label: 'password',
            type: 'password'
          },
          {
            label: 'confirm password',
            type: 'password'
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
