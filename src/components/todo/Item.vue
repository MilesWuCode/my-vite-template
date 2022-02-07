<script setup lang="ts">
import Dropdown from '~/components/todo/Dropdown2.vue'

interface Todo {
  active: boolean
  content: string
  // created_at: datetime
  id: string
  // updated_at: 
}

defineProps<{ todo: Todo }>()
</script>

<template>
  <div class="flex">
    <div class="flex-none">
      <input type="checkbox" class="mx-2 checkbox checkbox-accent" />
    </div>
    <div class="grow">
      <p>{{ todo.content }}</p>
    </div>
    <div class="flex-none">
      <Dropdown />
    </div>
  </div>
</template>