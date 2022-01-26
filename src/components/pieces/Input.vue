<script lang="ts">
export default {
  inheritAttrs: false
}
</script>

<script setup lang="ts">
// * example case1
// const props = defineProps<{
//   label: string,
//   error: any,
//   modelValue: any,
// }>()

// * example case2
interface Props {
  label: string,
  error: string,
  modelValue: string | number,
}

const props = withDefaults(defineProps<Props>(), {
  label: '',
  error: '',
  modelValue: '',
})

// * example case3
// 不檢查undefined
// const props = defineProps({
//   label: String,
//   error: String,
//   modelValue: [String, Number],
// })

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