<script setup lang="ts">
import { ref } from 'vue';
import Dropdown from '~/components/todo/Dropdown2.vue'
import { useUpdateTodoMutation } from "~/graphql/graphqlOperations";
import { useToast } from 'vue-toastification'
import { debounce } from 'lodash-es'

const toast = useToast()

interface Todo {
  id: string
  content: string
  active: boolean
  created_at: string
  updated_at: string
}

const props = defineProps<{ todo: Todo }>()

const checked = ref(props.todo.active)

const { mutate, loading, error, onDone } = useUpdateTodoMutation({ variables: { id: props.todo.id } })

const saveChange = () => {
  console.log(checked.value)
  
  void mutate({ id: props.todo.id, active: checked.value })
}

const onDebounce = debounce(saveChange, 2000)

const onChange = () => {
  onDebounce()
}

onDone(() => {
  toast.success('Success')
})
</script>

<template>
  <div class="flex">
    <div class="flex-none">
      <input
        type="checkbox"
        v-model="checked"
        @change="onChange"
        class="mx-2 checkbox checkbox-accent"
      />
    </div>
    <div class="grow">
      <p>{{ props.todo.content }}</p>
    </div>
    <div class="flex-none">
      <Dropdown />
    </div>
  </div>
</template>