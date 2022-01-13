<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({
  title: '404 Not Found',
  meta: [
    { name: 'description', content: 'Not Found' },
  ],
})
</script>

<template>
  <div>
    <h1>404</h1>
  </div>
</template>

<route lang="yaml">
meta:
  layout: error
  requiresAuth: false
</route>