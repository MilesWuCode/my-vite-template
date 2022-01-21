<script setup lang="ts">
import Input from '~/components/pieces/Input.vue'
import { markRaw } from 'vue'
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'
import lang from '~/modules/yup/zhTW.json'

yup.setLocale(lang)

const rules = {
  password: yup.string().required().min(8).label('Password'),
  comfirm_password: yup.string().required().oneOf([yup.ref('password')], 'Password must match').label('Comfirm Password'),
}

const schema = markRaw(yup.object(rules))

const { meta, handleSubmit, resetForm, setErrors, isSubmitting, setFieldValue } = useForm({
  validationSchema: schema,
})

const { value: password, errorMessage: passwordError } = useField<string>('password', rules.password, { validateOnValueUpdate: false })
const { value: comfirmPassword, errorMessage: comfirmPasswordError } = useField<string>('comfirm_password', rules.comfirm_password, { validateOnValueUpdate: false })

const onSubmit = handleSubmit((values, actions) => {
  console.log(JSON.stringify(values, undefined, 2))
})

const onReset = () => {
  resetForm()
}
</script>

<template>
  <form novalidate @submit="onSubmit">
    <div class="align-middle">
      <div class="max-w-sm p-4 mx-auto my-0 space-y-4">
        <h1 class="text-2xl">Change Password</h1>

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