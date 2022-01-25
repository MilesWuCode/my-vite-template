import { Auth, AuthOptions } from './types'
import { App } from 'vue'
// import { RouteLocationRaw, RouteLocationNormalized, RouteRecordName } from 'vue-router'
import { useCookies } from '@vueuse/integrations/useCookies'
import axios from '~/modules/axios/instance'
import { useAuthStore } from '~/stores/auth'

const cookies = useCookies(['locale'])

export let authInstance: Auth | undefined = undefined

function setupAuth({ router }: AuthOptions): Auth {
  // function init() {
  //   router.beforeEach(async (to: RouteLocationNormalized, from: RouteLocationNormalized): Promise<boolean | RouteLocationRaw> => {
  //     // store
  //     const authStore = useAuthStore()

  //     if (!authStore.loggedIn) {
  //       // 抓取用戶資料存到store
  //       await fetchUser()
  //     }

  //     // 例外的router-name
  //     if (typeof to.name === 'string' && !['login', 'register'].includes(to.name)) {
  //       // 記錄網址到cookie
  //       cookies.set('auth_redirect', to.fullPath)
  //     }

  //     // 已登入不該進入
  //     if (authStore.loggedIn && typeof to.name === 'string' && ['login', 'register'].includes(to.name)) {
  //       return from.fullPath || '/'
  //     }

  //     // 未登入回到登入頁
  //     if (to.meta.requiresAuth && !authStore.loggedIn) {
  //       return 'login'
  //     }

  //     // 最後
  //     return true
  //   })
  // }

  async function login(data: any) {
    cookies.set('password_token_type', data.token_type, { maxAge: data.expires_in })

    cookies.set('password_access_token', data.access_token, { maxAge: data.expires_in })

    // * only password
    if (data?.refresh_token) {
      // * example, maxAge
      // * 30 days
      cookies.set('password_refresh_token', data.refresh_token, { maxAge: 86400 * 30 })
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

  function logout(redirect: string = '/') {
    // store
    const authStore = useAuthStore()

    if (!authStore.loggedIn) {
      return
    }

    cookies.remove('password_token_type')
    cookies.remove('password_access_token')
    cookies.remove('password_refresh_token')

    authStore.setUser(null)

    router.push(redirect)
  }

  return {
    // init,
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

      // authInstance.init()
    },
  }
}
