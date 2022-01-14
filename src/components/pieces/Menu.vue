<template>
  <ul>
    <li class="mb-6">
      <h5 class="mb-3 text-gray-900">Account</h5>
      <ul class="space-y-6 lg:space-y-2">
        <li>
          <router-link class="block pl-4 text-gray-900" to="/login">Login</router-link>
        </li>
        <li>
          <router-link class="block pl-4 text-gray-900" to="/register">Register</router-link>
        </li>
        <li>
          <router-link class="block pl-4 text-gray-900" to="/todo">Todo</router-link>
        </li>
      </ul>
    </li>
    <li class="mb-6">
      <h5 class="mb-3 text-gray-900">Page</h5>
      <ul class="space-y-6 lg:space-y-2">
        <li>
          <router-link class="block pl-4 text-gray-900" to="/">Index</router-link>
        </li>
        <li>
          <router-link class="block pl-4 text-gray-900" to="/test">Test</router-link>
        </li>
      </ul>
    </li>
  </ul>
</template>