<script setup lang="ts">
import Title from '~/components/pieces/Title.vue'
import { storeToRefs } from 'pinia'
import { useStore } from '~/stores/pinia'
const store = useStore()

const { counter, doubleCount } = storeToRefs(store)

const reset = () => {
  store.$reset()
}

const random = () => {
  store.randomizeCounter()
}
</script>

<template>
  <div>
    <Title name="Pinia" />
    <div class="mr-2 badge badge-outline">counter : {{ counter }}</div>
    <div class="mr-2 badge badge-outline">doubleCount : {{ doubleCount }}</div>
    <div class="my-2 space-x-2">
      <button @click="counter++" class="btn btn-accent">+1</button>
      <button @click="reset" class="btn btn-accent">Reset</button>
      <button @click="random" class="btn btn-accent">random</button>
    </div>
    <pre>
        <code class="block">{{ JSON.stringify(store, undefined, 2) }}</code>
    </pre>
  </div>
</template>

<route lang="yaml">
meta:
  layout: content
  auth: everyone
</route>