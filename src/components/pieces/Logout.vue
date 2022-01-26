<script setup lang="ts">
import Confirm from '~/components/pieces/confirm.vue'
// firebase
import { firebaseApp } from '~/modules/firebase/firebase'
import { getAuth, signOut } from 'firebase/auth'
import { useAuth as useFirebaseAuth } from '@vueuse/firebase/useAuth'
// auth
import { useAuth } from '~/modules/auth'
import { ref } from 'vue'

const firebaseAuth = getAuth(firebaseApp)
const { isAuthenticated } = useFirebaseAuth(firebaseAuth)
const auth = useAuth()

// ui/ux
const isShow = ref(false)

const logout = async () => {
  if (isAuthenticated.value) {
    await signOut(firebaseAuth)
  }

  await auth.logout()
}

const open = () => {
  isShow.value = true
}

const argee = () => {
  isShow.value = false

  logout()
}

const cancel = () => {
  isShow.value = false
}
</script>

<template>
  <a @click="open">Logout</a>
  <Confirm :show="isShow" @argee="argee" @cancel="cancel" title="Confirm" />
</template>