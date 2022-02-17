<script setup>
</script>

<template>
  <main>
    <section class="contact">
      <h2 class="contact__heading">
        contact
      </h2>

      <form
        class="contact__form"
        action=""
        method=""
      >
        <label class="contact__form__label">
          your name (required)
          <input type="text" class="contact__form__label__input">
        </label>

        <label class="contact__form__label">
          your email (required)
          <input type="text" class="contact__form__label__input">
        </label>

        <label class="contact__form__label">
          subject
          <input type="text" class="contact__form__label__input">
        </label>

        <label class="contact__form__label">
          your message
          <textarea class="contact__form__label__input" rows="10"></textarea>
        </label>

        <label class="contact__form__label-checkbox">
          <input type="checkbox" class="contact__form__label-checkbox__checkbox">
          I am happy to be contacted regarding my enquiry
        </label>

        <button class="contact__form__button" type="submit">
          send
        </button>
      </form>
    </section>
  </main>
</template>

<style lang="scss">
@include forms(contact)
</style>
