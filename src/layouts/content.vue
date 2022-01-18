<script setup lang="ts">
import Navbar from '~/components/pieces/Navbar.vue';
import Menu from '~/components/pieces/Menu.vue';
</script>

<template>
  <main>
    <Navbar />
    <div class="drawer drawer-mobile">
      <input id="drawer-menu" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        <router-view />
      </div>
      <div class="drawer-side">
        <label for="drawer-menu" class="drawer-overlay"></label>
        <Menu class="p-2 overflow-y-auto bg-base-100 text-base-content w-80 h-[calc(100vh-4rem)]" />
      </div>
    </div>
  </main>
</template>