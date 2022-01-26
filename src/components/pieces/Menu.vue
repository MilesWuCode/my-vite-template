<script setup lang="ts">
import Logout from '~/components/pieces/Logout.vue'
import { useAuthStore } from '~/stores/auth'

const authStore = useAuthStore()
</script>

<template>
  <ul class="menu bg-base-100">
    <li class="menu-title">Member</li>
    <li>
      <router-link to="/register">Register</router-link>
    </li>
    <li>
      <router-link to="/login">Login</router-link>
    </li>
    <li>
      <router-link to="/profile?abc=123">Profile</router-link>
    </li>
    <li>
      <router-link to="/change-password">Change Password</router-link>
    </li>
    <li>
      <router-link to="/todo">Todo</router-link>
    </li>
    <li v-if="authStore.loggedIn">
      <Logout />
    </li>
    <li class="menu-title">Vue</li>
    <li>
      <router-link to="/pinia">Pinia</router-link>
    </li>
    <li class="menu-title">GraphQL</li>
    <li>
      <router-link to="/news">News</router-link>
    </li>
    <li>
      <router-link to="/post">Post</router-link>
    </li>
  </ul>
</template>
