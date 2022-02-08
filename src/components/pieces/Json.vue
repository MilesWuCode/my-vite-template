<script setup lang="ts">
const props = defineProps({
  data: Object
})
</script>

<template>
  <pre><code class="block">{{ props.data }}</code></pre>
</template>