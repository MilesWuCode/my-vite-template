import axios, { AxiosRequestConfig } from 'axios'
import { useCookies } from '@vueuse/integrations/useCookies'
import router from '~/router'

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
    // refresh
    const formData = new FormData()
    formData.append('refresh_token', password_refresh_token)
    formData.append('client_secret', import.meta.env.VITE_PASSWORD_GRANT_CLIENT_SECRET)
    formData.append('client_id', import.meta.env.VITE_PASSWORD_GRANT_CLIENT_ID)
    formData.append('grant_type', 'refresh_token')
    formData.append('scope', '*')

    try {
      const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/oauth/token`, formData)

      cookies.set('password_token_type', data.token_type, { maxAge: data.expires_in })
      cookies.set('password_access_token', data.access_token, { maxAge: data.expires_in })
      cookies.set('password_refresh_token', data.refresh_token, { maxAge: data.expires_in })

      config.headers.Authorization = `${data.token_type} ${data.access_token}`
    } catch (err) {
      console.log(1)
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
      router.push('/login')
    }

    return Promise.reject(error)
  }
)

export default instance