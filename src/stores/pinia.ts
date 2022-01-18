import { defineStore } from 'pinia'

export const useStore = defineStore('pinia demo', {
  state: () => ({
    counter: 0,
  }),
  getters: {
    doubleCount: (state):number => state.counter * 2,
  },
  actions: {
    increment() {
      this.counter++
    },
    randomizeCounter() {
      this.counter = Math.round(100 * Math.random())
    },
  },
})