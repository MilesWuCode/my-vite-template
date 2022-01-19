<script setup lang="ts">
// import XIcon from '~icons/heroicons-solid/x'
import Navbar from '~/components/pieces/Navbar.vue'
import Menu from '~/components/pieces/Menu.vue'
</script>

<template>
  <main>
    <Navbar class="fixed top-0 left-0 right-0" />
    <Menu class="fixed hidden p-2 indent-0 top-16 w-80 lg:block" />
    <router-view class="p-2 mt-16 lg:ml-80" />
  </main>
</template>