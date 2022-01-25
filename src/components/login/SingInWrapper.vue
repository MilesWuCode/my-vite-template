<script setup lang="ts">
// firebase
import { firebaseApp } from '~/modules/firebase/firebase'
import { getAuth, onAuthStateChanged, GoogleAuthProvider, FacebookAuthProvider, getRedirectResult } from 'firebase/auth'

// auth
import { useAuth } from '~/modules/auth'

const firebaseAuth = getAuth(firebaseApp)
const auth = useAuth()

// 觀查變化
onAuthStateChanged(firebaseAuth, (user): void => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    // ...
    console.log('onAuthStateChanged', user)
  } else {
    // User is signed out
    // ...
    console.log('User is signed out')
  }
})

// 換頁登入後拿資料
getRedirectResult(firebaseAuth)
  .then((result: any): void => {
    let credential: any
    let driver: string

    if (result.providerId === 'google.com') {
      credential = GoogleAuthProvider.credentialFromResult(result)

      driver = 'google'
    } else if (result.providerId === 'facebook.com') {
      credential = FacebookAuthProvider.credentialFromResult(result)

      driver = 'facebook'
    } else {
      return
    }

    let token = credential.accessToken;

    let user = result.user;

    console.log('getRedirectResult', result, user, credential, token)

    auth.loginWithSocialite(driver, token)
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    console.log(errorCode, errorMessage)
  })
</script>

<template>
  <div>
    <slot />
  </div>
</template>