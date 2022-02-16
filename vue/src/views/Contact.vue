<script setup>
</script>

<template>
  <main class="contact">
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

      <label class="contact__form__label">
        <input type="checkbox" class="contact__form__label__checkbox">
        I am happy to be contacted regarding my enquiry
      </label>
    </form>
  </main>
</template>

<style lang="scss">
.contact {
  text-align: center;
  display: flex;
  flex-direction: column;

  &__heading {
    text-transform: uppercase;
    letter-spacing: .2rem;
    padding: 6rem 0;
    margin: 0;
    color: $alt-text-color;
  }

  &__form {
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 0 auto;
    padding-bottom: 2rem;

    &__label {
      width: 100%;
      padding: .75rem 0;
      text-transform: uppercase;
      font-size: .9rem;
      &:last-child {
        width: 80%;
        margin: 0 auto;
        text-transform: unset;
        line-height: 1.2rem;
      }

      &__input {
        resize: none;
        width: 100%;
        box-sizing: border-box;
        background-color: $inputs-color;
        border: solid 1px $inputs-border-color;
        border-radius: 5px;
        padding: .6rem;
        margin-top: 1rem;
        color: $lightest-color;

        &:focus {
          outline: none;
          border: 1px solid $lightest-color;
        }
      }

      &__checkbox {
        margin-right: 10px;
        width: 20px;
        height: 20px;
      }
    }
  }
}
</style>
