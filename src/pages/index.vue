<script setup lang="ts">
import { useHead } from '@vueuse/head'
import Title from '~/components/pieces/Title.vue'

useHead({
  title: 'Index Title',
  meta: [
    { name: 'description', content: 'Index Description' },
  ],
})
</script>

<template>
  <div>
    <Title name="Index" />
  </div>
</template>

<route lang="yaml">
meta:
  layout: default
  requiresAuth: false
</route>