<script setup lang="ts">
import { useHead } from '@vueuse/head'
import Title from '~/components/pieces/Title.vue'

useHead({
  title: 'Todo Title',
  meta: [
    { name: 'description', content: 'Todo Description' },
  ],
})
</script>

<template>
  <div>
    <Title name="Todo" />
  </div>
</template>

<route lang="yaml">
meta:
  layout: content
  requiresAuth: true
</route>