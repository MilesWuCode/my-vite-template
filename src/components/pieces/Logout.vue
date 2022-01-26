<script setup lang="ts">
// firebase
import { firebaseApp } from '~/modules/firebase/firebase'
import { getAuth, signOut } from 'firebase/auth'
import { useAuth as useFirebaseAuth } from '@vueuse/firebase/useAuth'
// auth
import { useAuth } from '~/modules/auth'

const firebaseAuth = getAuth(firebaseApp)
const { isAuthenticated } = useFirebaseAuth(firebaseAuth)
const auth = useAuth()

const onClick = async () => {
  // if (isAuthenticated.value) {
  //   signOut(firebaseAuth).then(() => {
  //     auth.logout()
  //   }).catch((error) => {
  //     console.log(error)
  //   })
  // } else {
  //   auth.logout()
  // }

  if (isAuthenticated.value) {
    await signOut(firebaseAuth)
  }

  await auth.logout()
}
</script>

<template>
  <a @click.prevent="onClick">Logout</a>
</template>