<script setup lang="ts">

const props = defineProps({
  label: String,
  error: String,
})

</script>

<template>
  <div class="form-control">
    <label class="label">
      <span class="label-text">{{props.label}}</span>
    </label>
    <input
      type="text"
      placeholder="name"
      class="input input-bordered"
      :class="props.error && 'input-error'"
    />
    <label class="label">
      <span class="label-text-alt text-error">{{ props.error }}</span>
    </label>
  </div>
</template>