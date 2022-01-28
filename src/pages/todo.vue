<script setup lang="ts">
import Item from '~/components/todo/Item.vue'
import { ref } from 'vue'

const json = ref({})

</script>

<template>
  <div>
    <div class="max-w-sm p-4 mx-auto my-0 space-y-4">
      <h1 class="text-2xl">Todo</h1>
      <div class="space-y-4">
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: content
  auth: member-only
</route>