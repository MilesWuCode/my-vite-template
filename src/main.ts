import { createApp } from 'vue'
import App from './App.vue'
import { createHead } from '@vueuse/head'
import router from '~/router'

createApp(App)
  .use(createHead())
  .use(router)
  .mount('#app')
