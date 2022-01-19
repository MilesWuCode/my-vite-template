<script setup lang="ts">
import { useHead } from '@vueuse/head'
import Title from '~/components/pieces/Title.vue'
import Json from '~/components/pieces/Json.vue'
import axios from '~/modules/axios/instance'
import { ref } from 'vue'

const json = ref({})

useHead({
  title: 'Todo Title',
  meta: [
    { name: 'description', content: 'Todo Description' },
  ],
})

const onClick = async () => {
  try {
    const get = await axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
    console.log('status', get.status)
    json.value = get.data
  } catch (err) {
    console.log('err', err)
  }
}
</script>

<template>
  <div>
    <Title name="Todo" />
    <button @click="onClick">Click</button>
    <Json :data="json" />
  </div>
</template>

<route lang="yaml">
meta:
  layout: content
  requiresAuth: true
</route>