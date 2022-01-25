<script setup lang="ts">
// firebase
import { firebaseApp } from '~/modules/firebase/firebase'
import { getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithRedirect, getRedirectResult } from 'firebase/auth'
import { useAuth as useFirebaseAuth } from '@vueuse/firebase/useAuth'
// auth
import { useAuth } from '~/modules/auth'
import { useAuthStore } from '~/stores/auth'

const firebaseAuth = getAuth(firebaseApp)
const { isAuthenticated, user: authUser } = useFirebaseAuth(firebaseAuth)

const auth = useAuth()
const authStore = useAuthStore()

console.log('useAuth', isAuthenticated, authUser)

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

// current user
const currentUser = firebaseAuth.currentUser;
if (currentUser) {
  // User is signed in, see docs for a list of available properties
  // https://firebase.google.com/docs/reference/js/firebase.User
  console.log('auth.currentUser', currentUser)
} else {
  console.log('No user is signed in.')
}

// 換頁登入
const signInRedirect = () => {
  let provider = new GoogleAuthProvider()

  provider.addScope('email')

  // * example
  // provider.setCustomParameters({
  //   redirect_uri: 'http://localhost:3000'
  // })

  signInWithRedirect(firebaseAuth, provider)
}

// 換頁登入後拿資料
// getRedirectResult(firebaseAuth)
//   .then((result: any): void => {
//     if (result.providerId !== 'google.com') {
//       return
//     }

//     // This gives you a Google Access Token. You can use it to access Google APIs.
//     const credential: any = GoogleAuthProvider.credentialFromResult(result);

//     // token
//     const token = credential.accessToken;

//     // The signed-in user info.
//     const user = result.user;

//     console.log('getRedirectResult', result, user, credential, token)

//     auth.loginWithSocialite('google', token)
//   }).catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // The email of the user's account used.
//     const email = error.email;
//     // The AuthCredential type that was used.
//     const credential = GoogleAuthProvider.credentialFromError(error);
//     // ...
//     console.log(errorCode, errorMessage, email, credential)
//   })
</script>

<template>
  <button v-if="!authStore.loggedIn" @click="signInRedirect" class="btn btn-outline">Google</button>
</template>