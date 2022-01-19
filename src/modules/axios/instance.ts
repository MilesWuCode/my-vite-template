import Axios, { AxiosRequestConfig } from 'axios'
import { useCookies } from '@vueuse/integrations/useCookies'

const instance = Axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'test': '123',
  }
})

// instance.defaults.headers.common['Content-Type'] = 'application/json'
// instance.defaults.headers.common['Access-Control-Allow-Origin'] = '*'

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
    const formdata = new FormData()
    formdata.append('refresh_token', password_refresh_token)
    formdata.append('client_secret', import.meta.env.VITE_PASSWORD_GRANT_CLIENT_SECRET)
    formdata.append('client_id', import.meta.env.VITE_PASSWORD_GRANT_CLIENT_ID)
    formdata.append('grant_type', 'refresh_token')
    formdata.append('scope', '*')

    try {
      const oauthToken = await fetch(`${import.meta.env.VITE_API_URL}/oauth/token`, {
        method: 'POST',
        body: formdata,
      })

      const oauthTokenData = await oauthToken.json()

      cookies.set('password_token_type', oauthTokenData.token_type, { maxAge: oauthTokenData.expires_in })
      cookies.set('password_access_token', oauthTokenData.access_token, { maxAge: oauthTokenData.expires_in })
      cookies.set('password_refresh_token', oauthTokenData.refresh_token, { maxAge: oauthTokenData.expires_in })

      config.headers.Authorization = `${oauthTokenData.token_type} ${oauthTokenData.access_token}`
    } catch (err) {
      console.log(err)
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
    // if (error.response?.status === 422) {
    //   // ...
    // }

    return Promise.reject(error)
  }
)

export default instance