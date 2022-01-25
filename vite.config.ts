import fs from 'fs'
import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import Icons from 'unplugin-icons/vite'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },

  plugins: [
    vue(),

    // https://github.com/hannoeru/vite-plugin-pages
    Pages(),

    // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
    Layouts(),

    // https://github.com/antfu/unplugin-icons
    Icons({
      // 自動安裝來源
      autoInstall: true
    }),
  ],

  optimizeDeps: {
    include: [
      '@headlessui/vue',
      '@vueuse/firebase/useAuth',
      '@vueuse/head',
      'firebase/app',
      'firebase/auth',
      'pinia',
      'vee-validate',
      'vue-router',
      'vue-toastification',
      'vue',
      'yup',
      // '@vue/apollo-composable',
      // '@vueuse/core',
      // 'graphql-tag',
    ]
  },

  server: {
    port: 3000,
    https: {
      key: fs.readFileSync(`${__dirname}/src/assets/localhost-key.pem`),
      cert: fs.readFileSync(`${__dirname}/src/assets/localhost.pem`),
    },
  },
})
