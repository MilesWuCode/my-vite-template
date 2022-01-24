import { Router } from 'vue-router'
// import { Store } from 'pinia'

export interface Auth {
  init: () => void
  login(data: any): void
  fetchUser: () => void
  loginWithSocialite(driver: string, token: string): void
  logout: () => void
}

export interface AuthOptions {
  router: Router
  // store: Store
}