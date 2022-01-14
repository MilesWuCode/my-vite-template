<script setup lang="ts">
import { useHead } from '@vueuse/head'
import Title from '~/components/pieces/Title.vue'
import Alert from '~/components/pieces/Alert.vue'
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
    <Alert />
  </div>
</template>

<route lang="yaml">
meta:
  layout: default
  requiresAuth: false
</route>