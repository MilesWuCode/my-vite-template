import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

import { createHead } from '@vueuse/head'
import { createPinia } from 'pinia'

import router from '~/router'
import { createAuth } from '~/modules/auth'

// toast
import Toast, { PluginOptions, POSITION } from 'vue-toastification'
import 'vue-toastification/dist/index.css'
const options: PluginOptions = {
  position: POSITION.BOTTOM_RIGHT
}

createApp(App)
  .use(createHead())
  .use(createPinia())
  .use(router)
  .use(createAuth({ router }))
  .use(Toast, options)
  .mount('#app')
