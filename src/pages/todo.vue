<script setup lang="ts">
import Item from '~/components/todo/Item.vue'
import { ref } from 'vue'
import Input from '~/components/pieces/Input.vue'

const json = ref({})

</script>

<template>
  <div>
    <div class="max-w-sm p-4 mx-auto my-0 space-y-4">
      <h1 class="text-2xl">Todo</h1>
      <Input />
      <div class="space-y-4">
        <Item v-for="i of 10" :key="i" />
      </div>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: content
  auth: member-only
</route>