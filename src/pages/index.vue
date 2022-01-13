<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({
  title: 'Index Title',
  meta: [
    { name: 'description', content: 'Index Description' },
  ],
})
</script>

<template>
  <div>
    <h1>Index</h1>
  </div>
</template>

<route lang="yaml">
meta:
  layout: default
  requiresAuth: false
</route>