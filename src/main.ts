import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createHead } from '@vueuse/head'
import router from '~/router'
import { createPinia } from 'pinia'
import {createAuth} from '~/modules/auth'

// const auth = createAuth({
//   router,
//   // store,
// })

createApp(App)
  .use(createHead())
  .use(router)
  .use(createPinia())
  .use(createAuth({router}))
  .mount('#app')
