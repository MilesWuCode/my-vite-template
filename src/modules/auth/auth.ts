import { Auth, AuthOptions } from './types'
import { App } from 'vue'
import { RouteLocationRaw, RouteLocationNormalized } from 'vue-router'
import { useCookies } from '@vueuse/integrations/useCookies'
import axios from '~/modules/axios/instance'
import { useAuthStore } from '~/stores/auth'

const cookies = useCookies(['locale'])

export let authInstance: Auth | undefined = undefined

function setupAuth({ router }: AuthOptions): Auth {
  async function init() {
    // 先檢查並抓取用戶資料存到store
    await fetchUser()

    router.beforeEach(async (to: RouteLocationNormalized, from: RouteLocationNormalized): Promise<boolean | RouteLocationRaw> => {
      // store
      const authStore = useAuthStore()

      // 當進入登入頁時,記錄進入前的網址到cookie
      if (to.name !== 'login') {
        cookies.set('auth_redirect', to.fullPath)
      }

      // 進入登入頁
      if (to.name === 'login') {
        // 已登入不離開
        if (authStore.loggedIn) {
          return from.fullPath
        }
        // 未登入
        return true
      }

      // 進入需要登入的頁面
      if (to.meta.requiresAuth) {
        // 未登入進登入頁
        if (!authStore.loggedIn) {
          return 'login'
        }
      }

      // 最後
      return true
    })
  }

  async function login(data: any) {
    cookies.set('password_token_type', data.token_type, { maxAge: data.expires_in })
    cookies.set('password_access_token', data.access_token, { maxAge: data.expires_in })

    if (data?.refresh_token) {
      cookies.set('password_refresh_token', data.refresh_token, { maxAge: data.expires_in })
    }

    await fetchUser()

    redirect()
  }

  function redirect() {
    const redirect = cookies.get('auth_redirect') || ''

    router.push(redirect)
  }

  async function fetchUser() {
    if (!cookies.get('password_access_token') && !cookies.get('password_refresh_token')) {
      return
    }

    // store
    const authStore = useAuthStore()

    await axios.get('/api/user')
      .then(({ data }) => {
        authStore.setUser(data.data)
      })
      .catch(err => {
        console.log(err)
        logout()
      })
  }

  function loginWithSocialite(driver: string, token: string) {
    axios.post('/api/socialite/singin', { driver, token })
      .then(({ data }) => {
        login(data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  function logout() {
    // store
    const authStore = useAuthStore()

    if (!authStore.loggedIn) {
      return
    }

    cookies.remove('password_token_type')
    cookies.remove('password_access_token')
    cookies.remove('password_refresh_token')

    authStore.setUser(null)

    router.push('/')
  }

  return {
    init,
    login,
    fetchUser,
    loginWithSocialite,
    logout,
  }
}

export function createAuth(appOptions: AuthOptions) {
  return {
    install: (app: App): void => {
      authInstance = setupAuth(appOptions)

      authInstance.init()
    },
  }
}
