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
  buttonLabel: String,
  fillables: Object
})
</script>

<template>
  <form
    :class="`${sectionName}__form`"
    :action="action"
    :method="method"
    @submit.prevent="$emit('submitFillables')"
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
        :name="input.name"
        v-model="fillables[input.name]"
      >

      {{ input.label }}

      <input
        v-if="input.type === 'text' || input.type === 'password' || input.type === 'email'"
        :type="input.type"
        :class="`${sectionName}__form__label__input`"
        :name="input.name"
        v-model="fillables[input.name]"
      >

      <textarea
        v-else-if="input.type === 'textarea'"
        rows="10"
        :class="`${sectionName}__form__label__input`"
        :name="input.name"
        v-model="fillables[input.name]"
      ></textarea>
    </label>

    <button type="submit" :class="`${sectionName}__form__button`">
      {{ buttonLabel }}
    </button>
  </form>
</template>
