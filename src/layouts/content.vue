<script setup lang="ts">
import Navbar from '~/components/pcs/Navbar.vue';
</script>

<template>
  <main>
    <Navbar />
    <div class="mx-auto max-w-8xl">
      <div
        class="hidden lg:block fixed z-20 inset-0 top-[48px] w-[18rem] overflow-y-auto bg-yellow-400/50"
      >left menu</div>
      <div class="lg:pl-[18rem] bg-green-300/50">
        <router-view />
      </div>
    </div>
  </main>
</template>