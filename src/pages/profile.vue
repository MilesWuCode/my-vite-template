<script setup lang="ts">
import Title from '~/components/pieces/Title.vue'
</script>

<template>
  <div>
    <Title name="Profile" />
  </div>
</template>

<route lang="yaml">
meta:
  layout: content
  requiresAuth: true
</route>
