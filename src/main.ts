import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createHead } from '@vueuse/head'
import router from '~/router'

import '@themesberg/flowbite'

import * as yup from 'yup'
import lang from '~/modules/yup/zhTW.json'
yup.setLocale(lang)

createApp(App)
  .use(createHead())
  .use(router)
  .mount('#app')
