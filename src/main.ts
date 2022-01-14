import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createHead } from '@vueuse/head'
import router from '~/router'

import '@themesberg/flowbite'

createApp(App)
  .use(createHead())
  .use(router)
  .mount('#app')
