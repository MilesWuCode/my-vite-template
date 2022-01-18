<script setup lang="ts">
const props = defineProps({
  name: String
})
</script>

<template>
  <h1 class="text-2xl">{{ props.name }}</h1>
</template>