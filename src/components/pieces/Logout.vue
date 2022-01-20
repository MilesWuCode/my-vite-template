<script setup lang="ts">
import { useAuth } from '~/modules/auth'

const auth = useAuth()

const onClick = () => {
  auth.logout()
}
</script>

<template>
  <a @click.prevent="onClick">Logout</a>
</template>