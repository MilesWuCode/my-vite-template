<script setup lang="ts">
import Input from '~/components/pieces/Input.vue'
import { markRaw, onMounted, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'
import lang from '~/modules/yup/zhTW.json'
import axios from '~/modules/axios/instance'

const router = useRouter()

yup.setLocale(lang)

const schema = markRaw(yup.object({
  name: yup.string().required().max(20).label('Name'),
}))

const { meta, handleSubmit, resetForm, setErrors, isSubmitting, setFieldValue } = useForm({
  validationSchema: schema,
  // initialValues: {
  //   email: 'user@email.com',
  //   password: 'password',
  // }
})

const { value: name, errorMessage: nameError } = useField<string>('name')

const getUser = async () => {
  try {
    const { data } = await axios.get('/api/user')
    return data.data
  } catch (err) {
    console.log(err)
  }
}

onMounted(async () => {
  const user = await getUser()

  setFieldValue('name', user.name)
})

const onSubmit = handleSubmit((values, actions) => {
  console.log(JSON.stringify(values, undefined, 2))

  axios.post('/api/user', values)
    .then(({ data }) => {
      console.log(data)

    }).catch((err) => {
      if (err.response?.status == 422) {
        console.log(err.response.data.errors)

        actions.setErrors(err.response.data.errors)
      }
    })
})

const onReset = () => {
  resetForm()
}
</script>

<template>
  <form novalidate @submit="onSubmit">
    <div class="align-middle">
      <div class="max-w-sm p-4 mx-auto my-0 space-y-4">
        <h1 class="text-2xl">Profile</h1>

        <Input type="text" v-model="name" :error="nameError" label="Username" placeholder="name" />

        <div class="justify-end card-actions">
          <button type="submit" :disabled="!meta.valid || isSubmitting" class="btn btn-info">Submit</button>
          <button @click="onReset" type="button" class="btn btn-ghost">Reset</button>
        </div>
      </div>
    </div>
  </form>
</template>

<route lang="yaml">
meta:
  layout: content
  requiresAuth: true
</route>