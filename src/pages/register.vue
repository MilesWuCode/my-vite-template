<script setup lang="ts">
import Input from '~/components/pieces/Input.vue'
import { markRaw } from 'vue'
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'
import lang from '~/modules/yup/zhTW.json'

yup.setLocale(lang)

const rules = {
  name: yup.string().required().max(20).label('Name'),
  email: yup.string().required().email().label('Email Address'),
  password: yup.string().required().min(8).label('Password'),
  comfirmPassword: yup.string().required().oneOf([yup.ref('password')], 'Password must match').label('Comfirm Password'),
}

const schema = markRaw(yup.object(rules))

const { meta, handleSubmit, resetForm, setErrors, isSubmitting, setFieldValue } = useForm({
  validationSchema: schema,
  // initialValues: {
  //   email: 'user@email.com',
  //   password: 'password',
  // }
})

const { value: name, errorMessage: nameError } = useField('name', rules.name, { validateOnValueUpdate: false })
const { value: email, errorMessage: emailError } = useField('email', rules.email, { validateOnValueUpdate: false })
const { value: password, errorMessage: passwordError } = useField('password', rules.password, { validateOnValueUpdate: false })
const { value: comfirmPassword, errorMessage: comfirmPasswordError } = useField('comfirmPassword', rules.comfirmPassword, { validateOnValueUpdate: false })

// email.value = 'user@email.com'
// password.value = 'password'

setFieldValue('email', 'user@email.com')
// setFieldValue('password', 'password')

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
  <form novalidate @submit="onSubmit">
    <div class="align-middle">
      <div class="max-w-sm p-4 mx-auto my-0 space-y-4">
        <h1 class="text-2xl">Register</h1>

        <Input type="text" v-model="name" :error="nameError" label="Username" placeholder="name" />

        <Input type="email" v-model="email" :error="emailError" label="Email" placeholder="email" />

        <Input
          type="password"
          v-model="password"
          :error="passwordError"
          label="Password"
          placeholder="password"
        />

        <Input
          type="password"
          v-model="comfirmPassword"
          :error="comfirmPasswordError"
          label="Comfirm Password"
          placeholder="comfirm password"
        />

        <div class="justify-end card-actions">
          <button type="submit" class="btn btn-info">Submit</button>
          <button @click="onReset" type="button" class="btn btn-ghost">Reset</button>
        </div>
      </div>
    </div>
  </form>
</template>

<route lang="yaml">
meta:
  layout: content
  requiresAuth: false
</route>