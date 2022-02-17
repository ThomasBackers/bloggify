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
            type: 'text',
            name: 'name'
          },
          {
            label: 'your email',
            type: 'email',
            name: 'email'
          },
          {
            label: 'subject',
            type: 'text',
            name: 'subject'
          },
          {
            label: 'your message',
            type: 'textarea',
            name: 'message'
          },
          {
            label: 'I am happy to be contacted regarding my enquiry',
            type: 'checkbox',
            name: 'agree'
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
