<script setup lang="ts">
import { useHead } from '@vueuse/head'
import Title from '~/components/pcs/Title.vue'
import Alert from '~/components/pcs/Alert.vue'
useHead({
  title: 'Test Title',
  meta: [
    { name: 'description', content: 'Test Description' },
  ],
})
</script>

<template>
  <div>
    <Title name="Test" />
    # not working
    <Alert />
  </div>
</template>

<route lang="yaml">
meta:
  layout: content
  requiresAuth: false
</route>