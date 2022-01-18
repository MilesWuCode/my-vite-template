<script setup lang="ts">
import BellIcon from '~icons/heroicons-outline/bell'
import MenuIcon from '~icons/heroicons-outline/Menu'
import XIcon from '~icons/heroicons-outline/X'

import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'

const navigation = [
  { name: 'Index', href: '/', current: true },
  { name: 'Pages', href: '/test', current: false },
]
</script>

<template>
  <div class="mb-2 shadow-lg navbar bg-neutral text-neutral-content">
    <div class="flex-none">
      <button class="btn btn-square btn-ghost">
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
      </button>
    </div>
    <div class="flex-1 px-2 mx-2">
      <span class="text-lg font-bold">Title</span>
    </div>
    <div class="flex-none">
      <div class="avatar">
        <div class="w-10 h-10 m-1 rounded-full">
          <img src="https://i.pravatar.cc/500?img=32" />
        </div>
      </div>
    </div>
  </div>
</template>