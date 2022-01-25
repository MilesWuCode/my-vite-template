<script setup lang="ts">
import { markRaw } from 'vue'
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'
import axios from '~/modules/axios/instance'
import { useAuth } from '~/modules/auth'
import SingInWrapper from '~/components/login/SingInWrapper.vue'
import GoogleSingIn from '~/components/login/GoogleSingIn.vue'
import FacebookSingIn from '~/components/login/FacebookSingIn.vue'
import SingOut from '~/components/login/SingOut.vue'

const schema = markRaw(yup.object({
  email: yup.string().required().email().label('Email Address'),
  password: yup.string().required().min(8).label('Password'),
}))

const { meta, handleSubmit, resetForm, setErrors, isSubmitting, setFieldValue } = useForm({
  validationSchema: schema,
  // initialValues: {
  //   email: 'user@email.com',
  //   password: 'password',
  // }
})

const { value: email, errorMessage: emailError } = useField('email')
const { value: password, errorMessage: passwordError } = useField('password')

// email.value = 'user@email.com'
// password.value = 'password'

setFieldValue('email', 'user@email.com')
setFieldValue('password', 'password')

const onSubmit = handleSubmit((values, actions) => {
  console.log(JSON.stringify(values, undefined, 2))

  axios.post('/oauth/token', {
    grant_type: 'password',
    client_id: import.meta.env.VITE_PASSWORD_GRANT_CLIENT_ID,
    client_secret: import.meta.env.VITE_PASSWORD_GRANT_CLIENT_SECRET,
    username: values.email,
    password: values.password,
    scope: '*',
  })
    .then(({ data }) => {
      console.log(data)

      const auth = useAuth()

      auth.login(data)

      actions.resetForm()
    }).catch((err) => {
      if (err.response?.status == 422) {
        actions.setErrors(err.response.data.errors)
      } else if (err.response?.status == 400) {
        actions.setErrors({ email: err.response?.data?.message || 'error' })
      }
    })
})

const onReset = () => {
  resetForm()
}
</script>

<template>
  <div>
    <form @submit="onSubmit">
      <div class="max-w-sm p-4 mx-auto my-0 space-y-4">
        <h1 class="text-2xl">Login</h1>

        <div class="form-control">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input
            type="text"
            v-model="email"
            placeholder="username"
            class="input input-bordered"
            :class="emailError && 'input-error'"
          />
          <label class="label">
            <span class="label-text-alt text-error">{{ emailError }}</span>
          </label>
        </div>

        <div class="form-control">
          <label class="label">
            <span class="label-text">Password</span>
          </label>
          <input
            type="password"
            v-model="password"
            placeholder="password"
            class="input input-bordered"
            :class="passwordError && 'input-error'"
          />
          <label class="label">
            <span class="label-text-alt text-error">{{ passwordError }}</span>
          </label>
        </div>

        <div class="justify-end card-actions">
          <button type="submit" :disabled="!meta.valid || isSubmitting" class="btn btn-info">Submit</button>
          <button @click="onReset" type="button" class="btn btn-ghost">Reset</button>
        </div>
      </div>
    </form>

    <SingInWrapper class="flex justify-center space-x-2">
      <GoogleSingIn />
      <FacebookSingIn />
      <button class="btn btn-outline">Apple</button>
      <SingOut />
    </SingInWrapper>
  </div>
</template>

<route lang="yaml">
meta:
  layout: content
  auth: guest-only
</route>