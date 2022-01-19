<script setup lang="ts">
const props = defineProps({
  data: Object
})
</script>

<template>
  <pre><code class="block">{{ JSON.stringify(props.data, undefined, 2) }}</code></pre>
</template>