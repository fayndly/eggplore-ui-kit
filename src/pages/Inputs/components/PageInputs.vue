<script setup lang="ts">
import { ref, computed } from 'vue'
import useVuelidate from '@vuelidate/core'

import { helpers, minLength, maxLength, numeric, email, sameAs } from '@vuelidate/validators'

import InputDefault from '@/ui/inputs/InputDefault.vue'
import ButtonDefault from '@/ui/buttons/ButtonDefault.vue'

const nameField = ref('')
const emailField = ref('')
const luckyField = ref('')
const passwordField = ref('')
const confirmPasswordField = ref('')
const frontendField = ref('')

const mustBeFrontend = (value: Array<string>) => value.includes('frontend')

const rules = computed(() => ({
  nameField: {
    minLength: helpers.withMessage(`Минимальная длина: 3 символа`, minLength(3))
  },
  emailField: {
    email: helpers.withMessage('Вы ввели неверный email', email)
  },
  luckyField: {
    maxLength: helpers.withMessage(`Максимальная длина: 2 символа`, maxLength(3)),
    numeric: helpers.withMessage('Вы можете ввести только цифры', numeric)
  },
  confirmPasswordField: {
    sameAsPassword: helpers.withMessage(`Пароли не совпадают`, sameAs(passwordField.value))
  },
  frontendField: {
    frontendField: helpers.withMessage('Строка должна содержать слово frontend', mustBeFrontend)
  }
}))

const v = useVuelidate(rules, {
  nameField,
  emailField,
  luckyField,
  confirmPasswordField,
  frontendField
})

const submitForm = () => {
  v.value.$touch()
  if (v.value.$error) return
  alert('Form submitted')
}
</script>

<template>
  <h1 class="heading-1">Inputs</h1>

  <form @submit.prevent="submitForm">
    <InputDefault
      label="Your name"
      name="name"
      placeholder="Input your name"
      v-model:value="v.nameField.$model"
      :error="v.nameField.$errors"
    />

    <InputDefault
      label="Your email"
      name="email"
      placeholder="Input your email"
      v-model:value="v.emailField.$model"
      :error="v.emailField.$errors"
    />

    <InputDefault
      label="Your lucky number"
      name="lucky"
      placeholder="Input your lucky number"
      v-model:value="v.luckyField.$model"
      :error="v.luckyField.$errors"
    />

    <InputDefault
      label="Your password"
      name="password"
      placeholder="Please input password"
      v-model:value="passwordField"
      type="password"
    />

    <InputDefault
      label="Confirm password"
      name="confirm"
      placeholder="Please confirm password"
      v-model:value="v.confirmPasswordField.$model"
      :error="v.confirmPasswordField.$errors"
      type="password"
    />

    <InputDefault
      label="Frontend string"
      name="frontend"
      placeholder="Input string with frontend"
      v-model:value="v.frontendField.$model"
      :error="v.frontendField.$errors"
    />

    <ButtonDefault label="Submit" color="primary"></ButtonDefault>
  </form>
</template>
