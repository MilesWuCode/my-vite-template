<script lang="ts">
export default {
  inheritAttrs: false
}
</script>

<script setup lang="ts">
const props = defineProps({
  label: String,
  error: String,
  modelValue: String,
})

const emit = defineEmits(['update:modelValue'])

const updateValue = (event: Event) => {
  emit('update:modelValue', (event.target as HTMLInputElement).value)
}
</script>

<template>
  <div class="form-control">
    <label class="label">
      <span class="label-text">{{ props.label }}</span>
    </label>
    <input
      v-bind="$attrs"
      :value="modelValue"
      :class="props.error && 'input-error'"
      @input="updateValue"
      class="input input-bordered"
    />
    <label class="label">
      <span class="label-text-alt text-error">{{ props.error }}</span>
    </label>
  </div>
</template>