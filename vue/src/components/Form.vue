<script setup>
defineProps({
  sectionName: String,
  action: {
    type: String,
    default: ''
  },
  method: {
    type: String,
    default: 'post'
  },
  inputs: Array,
  buttonLabel: String
})
</script>

<template>
  <form
    :class="`${sectionName}__form`"
    :action="action"
    :method="method"
  >
    <label
      v-for="(input, i) of inputs"
      :key="i"
      :class="`${sectionName}__form__label${input.type === 'checkbox' ? '-checkbox' : ''}`"
    >
      <input
        v-if="input.type === 'checkbox'"
        type="checkbox"
        :class="`${sectionName}__form__label-checkbox__checkbox`"
      >

      {{ input.label }}

      <input
        v-if="input.type === 'text'"
        type="text"
        :class="`${sectionName}__form__label__input`"
      >

      <textarea
        v-if="input.type === 'textarea'"
        rows="10"
        :class="`${sectionName}__form__label__input`"
      ></textarea>
    </label>

    <button type="submit" :class="`${sectionName}__form__button`">
      {{ buttonLabel }}
    </button>
  </form>
</template>
