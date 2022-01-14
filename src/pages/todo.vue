<script setup lang="ts">
import { useHead } from '@vueuse/head'
import Title from '~/components/pcs/Title.vue'
import Alert from '~/components/pcs/Alert.vue'
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
    # not working
    <Alert />
  </div>
</template>

<route lang="yaml">
meta:
  layout: default
  requiresAuth: false
</route>