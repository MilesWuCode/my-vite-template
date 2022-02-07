<script setup lang="ts">
import { markRaw } from 'vue'
import { useCreateTodoMutation } from '~/graphql/graphqlOperations'
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'
import lang from '~/modules/yup/zhTW.json'

yup.setLocale(lang)

interface emitType {
  (e: 'inserted'): void
}

const emit = defineEmits<emitType>()

const schema = markRaw(yup.object({
  content: yup.string().required().max(100).label('content'),
}))

const { meta, handleSubmit, resetForm, setErrors, isSubmitting, setFieldValue } = useForm({
  validationSchema: schema,
  initialValues: {
    content: '',
  }
})

const { value: content, errorMessage: contentError } = useField('content')

const { mutate, loading, error, onDone } = useCreateTodoMutation({ variables: { content: '' } })

const onSubmit = handleSubmit((values, actions) => {
  console.log(JSON.stringify(values, undefined, 2))

  if (values.content) {
    void mutate({ content: values.content })

    emit('inserted')
  }
})

onDone((result) => {
  console.log(result)
})


</script>

<template>
  <div class="form-control">
    <div class="relative">
      <input
        type="text"
        v-model="content"
        placeholder="New Todo..."
        class="w-full pr-16 input input-primary input-bordered"
      />
      <button
        v-if="content"
        :disabled="!meta.valid || isSubmitting"
        class="absolute top-0 right-0 rounded-l-none btn btn-primary"
        @click="onSubmit"
      >go</button>
    </div>
    <label class="label">
      <span class="label-text-alt text-error">{{ contentError }}</span>
    </label>
  </div>
</template>