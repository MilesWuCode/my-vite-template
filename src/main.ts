import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

// head
import { createHead } from '@vueuse/head'

// store:pinia
import { createPinia } from 'pinia'

// router
import router from '~/router'

// auth
import { createAuth } from '~/modules/auth'

// toast
import Toast, { PluginOptions, POSITION } from 'vue-toastification'
import 'vue-toastification/dist/index.css'
const options: PluginOptions = {
  position: POSITION.BOTTOM_RIGHT
}

// apollo
import apolloClient from '~/modules/apollo/client'
import { DefaultApolloClient } from '@vue/apollo-composable'

createApp(App)
  .use(createHead())
  .use(createPinia())
  .use(router)
  .use(createAuth({ router }))
  .use(Toast, options)
  .provide(DefaultApolloClient, apolloClient)
  .mount('#app')
