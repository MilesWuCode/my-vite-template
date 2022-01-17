<script setup lang="ts">
import { markRaw } from 'vue'
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'

const schema = markRaw(yup.object({
  email: yup.string().required().email(),
  password: yup.string().required().min(8),
}))

const { meta, handleSubmit, resetForm, setErrors, isSubmitting } = useForm({
  validationSchema: schema,
})

const { value: email, errorMessage: emailError } = useField('email')
const { value: password, errorMessage: passwordError } = useField('password')

email.value = 'user@email.com'
password.value = 'password'

const onSubmit = handleSubmit((values, actions) => {
  console.log(JSON.stringify(values, undefined, 2))

  // auth.login(values.email as string, values.password as string)
  //   .then((data) => {
  //     console.log(data)

  //     actions.resetForm()
  //   })
  //   .catch(err => {
  //     console.log(err)
  //     actions.setErrors({ email: err.message })
  //   })
})

const onReset = () => {
  resetForm()
}
</script>

<template>
  <div class="align-middle">
    <div class="max-w-sm p-4 mx-auto my-0 space-y-4">
      <h1 class="text-2xl">Login</h1>

      <label class="block">
        <span class="block text-sm font-medium text-slate-700">Email</span>
        <input
          v-model="email"
          type="text"
          class="block w-full px-3 py-2 mt-1 text-sm bg-white border rounded-md shadow-sm border-slate-300 placeholder-slate-400"
          :class="emailError && '!text-red-500 !border-red-500 !bg-red-100'"
        />
        <p class="h-5 mt-2 text-sm text-red-500">{{ emailError }}</p>
      </label>

      <label class="block">
        <span class="block text-sm font-medium text-slate-700">Password</span>
        <input
          v-model="password"
          type="password"
          class="block w-full px-3 py-2 mt-1 text-sm bg-white border rounded-md shadow-sm border-slate-300 placeholder-slate-400"
          :class="passwordError && '!text-red-500 !border-red-500 !bg-red-100'"
        />
        <p class="h-5 mt-2 text-sm text-red-500">{{ passwordError }}</p>
      </label>

      <div class="flex justify-end space-x-2">
        <button
          @click="onSubmit"
          type="submit"
          :disabled="!meta.valid || isSubmitting"
          class="text-white bg-blue-500 hover:bg-blue-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center disabled:bg-blue-300"
        >Login</button>
        <button
          @click="onReset"
          type="button"
          class="text-white bg-gray-500 hover:bg-gray-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center disabled:bg-gray-400"
        >Reset</button>
      </div>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: content
  requiresAuth: false
</route>