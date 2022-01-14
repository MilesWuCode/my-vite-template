<script setup lang="ts">
import Navbar from '~/components/pieces/Navbar.vue';
import Menu from '~/components/pieces/Menu.vue';
</script>

<template>
  <main>
    <Navbar />
    <div class="mx-auto max-w-8xl">
      <div
        class="hidden lg:block fixed z-20 inset-0 top-[4rem] w-[18rem] overflow-y-auto p-3"
      >
        <Menu />
      </div>
      <div class="lg:pl-[18rem]">
        <router-view />
      </div>
    </div>
  </main>
</template>