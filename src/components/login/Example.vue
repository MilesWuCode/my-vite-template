<script setup lang="ts">
import { firebaseApp } from '~/modules/firebase/firebase'
import { getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signInWithRedirect, getRedirectResult, signOut, User } from 'firebase/auth';
import { useAuth } from '@vueuse/firebase/useAuth'

const auth = getAuth(firebaseApp)
const { isAuthenticated, user: authUser } = useAuth(auth)
console.log('useAuth', authUser)

// 觀查變化
onAuthStateChanged(auth, (user): void => {
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
const currentUser = auth.currentUser;
if (currentUser) {
  // User is signed in, see docs for a list of available properties
  // https://firebase.google.com/docs/reference/js/firebase.User
  console.log('auth.currentUser', currentUser)
} else {
  console.log('No user is signed in.')
}

// 彈窗登入
const signInPopup = () => {
  signInWithPopup(auth, new GoogleAuthProvider())
    .then((result: any): void => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential: any = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
      console.log(user)
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
      console.log(errorCode, errorMessage, email, credential)
    })
}

// 換頁登入
const signInRedirect = () => {
  signInWithRedirect(auth, new GoogleAuthProvider())
}
// 換頁登入後拿user資料
getRedirectResult(auth)
  .then((result: any): void => {
    // This gives you a Google Access Token. You can use it to access Google APIs.
    const credential: any = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;

    // The signed-in user info.
    const user = result.user;
    console.log(user)
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
    console.log(errorCode, errorMessage, email, credential)
  })

// 登出
const signOutAuth = () => {
  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    console.log(error)
  })
}
</script>

<template>
  <div v-if="isAuthenticated">
    <pre>
    {{ authUser }}
    </pre>
    <button @click="signOutAuth">Sign Out</button>
  </div>
  <div v-else>
    <button @click="signInPopup">Sign In with Google (popup)</button>
    <button @click="signInRedirect">Sign In with Google (redirect)</button>
  </div>
</template>