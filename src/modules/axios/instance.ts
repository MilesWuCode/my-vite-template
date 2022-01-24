import axios, { AxiosRequestConfig } from 'axios'
import { useCookies } from '@vueuse/integrations/useCookies'
import { useAuth } from '~/modules/auth'

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  }
})

instance.interceptors.request.use(async (config: AxiosRequestConfig) => {
  const cookies = useCookies(['locale'])

  config.headers = config.headers ?? {}

  // Laravel Passport: Password Grant Client:
  const password_token_type = cookies.get('password_token_type') || 'Bearer'
  const password_access_token = cookies.get('password_access_token')
  const password_refresh_token = cookies.get('password_refresh_token')

  if (password_access_token) {
    config.headers.Authorization = `${password_token_type} ${password_access_token}`
  } else if (!password_access_token && password_refresh_token) {
    try {
      const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/oauth/token`, {
        refresh_token: password_refresh_token,
        client_secret: import.meta.env.VITE_PASSWORD_GRANT_CLIENT_SECRET,
        client_id: import.meta.env.VITE_PASSWORD_GRANT_CLIENT_ID,
        grant_type: 'refresh_token',
        scope: '*',
      })

      cookies.set('password_token_type', data.token_type, { maxAge: data.expires_in })
      cookies.set('password_access_token', data.access_token, { maxAge: data.expires_in })

      // * only password
      if (data?.refresh_token) {
        // * example, maxAge
        // * 30 days
        cookies.set('password_refresh_token', data.refresh_token, { maxAge: 86400 * 30 })
      }

      config.headers.Authorization = `${data.token_type} ${data.access_token}`
    } catch (err) {
      console.error(err)

      cookies.remove('password_token_type')
      cookies.remove('password_access_token')
      cookies.remove('password_refresh_token')
    }
  }

  return config
})

instance.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    if (error.response?.status === 401) {
      const auth = useAuth()

      auth.logout('/login')
    }

    return Promise.reject(error)
  }
)

export default instance