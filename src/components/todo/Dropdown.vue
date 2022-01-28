<script setup lang="ts">
import Dot from '~/assets/svgs/dot.svg'
</script>

<template>
  <div class="dropdown dropdown-end">
    <button class="btn btn-sm btn-ghost btn-square">
      <Dot />
    </button>
    <ul tabindex="0" class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
      <li>
        <a>Item 1</a>
      </li>
      <li>
        <a>Item 2</a>
      </li>
      <li>
        <a>Item 3</a>
      </li>
    </ul>
  </div>
</template>