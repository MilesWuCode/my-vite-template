import { Router } from 'vue-router'
// import { Store } from 'pinia'

export interface Auth {
  init: () => void
  login(data: any): Promise<void>
  fetchUser: () => Promise<void>
  logout: () => void
}

export interface AuthOptions {
  router: Router
  // store: Store
}