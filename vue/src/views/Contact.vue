<script setup>
import Form from '../components/Form.vue'
</script>

<template>
  <main>
    <section class="contact">
      <h2 class="contact__heading">
        contact
      </h2>

      <Form
        sectionName="contact"
        :inputs="[
          {
            label: 'your name',
            type: 'text'
          },
          {
            label: 'your email',
            type: 'email'
          },
          {
            label: 'subject',
            type: 'text'
          },
          {
            label: 'your message',
            type: 'textarea'
          },
          {
            label: 'I am happy to be contacted regarding my enquiry',
            type: 'checkbox'
          }
        ]"
        buttonLabel="send"
      />
    </section>
  </main>
</template>

<style lang="scss">
@include forms(contact)
</style>
