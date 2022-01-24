<script setup lang="ts">
import { useAuth } from '~/modules/auth'
const auth = useAuth()

// firebase
import { firebaseApp } from '~/modules/firebase/firebase'
import { getAuth, signOut } from 'firebase/auth'
import * as firebase from '@vueuse/firebase/useAuth'

// firebase
const firebaseAuth = getAuth(firebaseApp)
const { isAuthenticated } = firebase.useAuth(firebaseAuth)

const onClick = () => {
  if (isAuthenticated.value) {
    signOut(firebaseAuth).then(() => {
      auth.logout()
    }).catch((error) => {
      console.log(error)
    })
  } else {
    auth.logout()
  }
}
</script>

<template>
  <a @click.prevent="onClick">Logout</a>
</template>