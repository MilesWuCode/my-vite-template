<script setup lang="ts">
// * example case1
// const props = defineProps<{
//   name: string
// }>()

// * example case2
interface Props {
  name: string
}

const props = withDefaults(defineProps<Props>(), {
  name: 'Title',
})

// * example case3
// import { PropType } from 'vue'

// defineProps({
//   msg: {
//     type: String,
//     required: true,
//   },
//   form: {
//     type: Object as PropType<Form>,
//     required: false,
//     default() {
//       return {
//         age: 99999,
//       }
//     },
//   },
// })
</script>

<template>
  <h1 class="text-2xl">{{ props.name }}</h1>
</template>