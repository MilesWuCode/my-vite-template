<script setup lang="ts">
import Item from '~/components/todo/Item.vue'
import { ref } from 'vue'
import Insert from '~/components/todo/Insert.vue'
import { useResult } from '@vue/apollo-composable'
import { useMyTodosQuery } from '~/graphql/graphqlOperations'

const page = ref(1)
const { result, loading, error } = useMyTodosQuery({ first: 10, page: page.value })
const todos = useResult(result, [], (data) => data.myTodos.data)
</script>

<template>
  <div>
    <div class="max-w-sm p-4 mx-auto my-0 space-y-4">
      <h1 class="text-2xl">Todo</h1>
      <Insert />
      <div class="space-y-4">
        <Item v-for="todo of todos" :key="todo.id" :todo="todo" />
      </div>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: content
  auth: member-only
</route>