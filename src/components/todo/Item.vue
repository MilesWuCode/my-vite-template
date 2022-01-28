<script setup lang="ts">
import Dropdown from '~/components/todo/Dropdown2.vue'
</script>

<template>
  <div class="flex">
    <div class="flex-none">
      <input type="checkbox" class="mx-2 checkbox checkbox-accent" />
    </div>
    <div class="grow">
      <p>Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum</p>
    </div>
    <div class="flex-none">
      <Dropdown />
    </div>
  </div>
</template>