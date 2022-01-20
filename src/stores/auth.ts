import { defineStore } from 'pinia'

interface User {
  user: object|null
}

export const useAuthStore = defineStore('auth', {
  state: ():User => ({
    user: null,
  }),
  // state: ():User => {
  //   return {
  //     user: null
  //   }
  // },
  getters: {
    loggedIn: (state): boolean => state.user !== null,
  },
  actions: {
    setUser(user: object|null) {
      this.user = user
    },
    randomizeCounter() {
      // this.counter = Math.round(100 * Math.random())
    },
  },
})