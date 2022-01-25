<script setup lang="ts">
import { firebaseApp } from '~/modules/firebase/firebase'
import { getAuth, signOut } from 'firebase/auth'
import { useAuth as useFirebaseAuth } from '@vueuse/firebase/useAuth'

const auth = getAuth(firebaseApp)
const { isAuthenticated, user: authUser } = useFirebaseAuth(auth)
console.log('useAuth', authUser)

// 登出
const onClick = () => {
  console.log(auth.currentUser)

  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    console.log(error)
  })
}
</script>

<template>
  <button v-if="isAuthenticated" @click="onClick" class="btn btn-outline">Sign Out</button>
</template>