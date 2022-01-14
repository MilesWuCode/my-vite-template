<script setup lang="ts">
import { useHead } from '@vueuse/head'
import Title from '~/components/pieces/Title.vue'

useHead({
  title: '404 Not Found',
  meta: [
    { name: 'description', content: 'Not Found' },
  ],
})
</script>

<template>
  <div>
    <Title name="404" />
  </div>
</template>

<route lang="yaml">
meta:
  layout: error
  requiresAuth: false
</route>