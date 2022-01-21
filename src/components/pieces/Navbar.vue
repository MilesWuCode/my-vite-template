<script setup lang="ts">
import {useAuthStore } from '~/stores/auth'
const auth = useAuthStore()
</script>

<template>
  <div class="shadow-lg navbar bg-neutral text-neutral-content">
    <div class="flex-none lg:hidden">
      <label for="drawer-menu" class="btn btn-square btn-ghost">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="inline-block w-6 h-6 stroke-current"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </label>
    </div>
    <div class="flex-none px-2 mx-2">
      <span class="text-lg font-bold">Title</span>
    </div>
    <div class="flex-1 px-2 mx-2">
      <div class="items-stretch hidden lg:flex">
        <RouterLink to="/" class="btn btn-ghost btn-sm rounded-btn">Home</RouterLink>
        <RouterLink to="/todo" class="btn btn-ghost btn-sm rounded-btn">Todo</RouterLink>
      </div>
    </div>
    <div class="flex-none" v-if="auth.loggedIn">
      <a href="#" class="avatar">
        <div class="w-10 h-10 m-1 rounded-full">
          <img src="/original.png" />
        </div>
      </a>
    </div>
  </div>
</template>