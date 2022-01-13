<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({
  title: 'Site Title',
  meta: [
    { name: 'description', content: 'Site Description' },
  ],
})
</script>

<template>
  <router-view />
</template>
