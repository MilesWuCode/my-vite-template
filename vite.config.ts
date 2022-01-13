import fs from 'fs'
import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'

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
    Layouts()
  ],

  optimizeDeps: {
    include: [
      // 'vue',
      // '@vue/apollo-composable',
      // 'vuex',
      // '@vueuse/core',
      // '@vueuse/head',
      // '@vueuse/firebase/useAuth',
      // 'vue-router',
      // 'vee-validate',
      // 'firebase/app',
      // 'firebase/auth',
      // 'graphql-tag',
      // 'yup',
    ]
  },

  server: {
    port: 3000,
    // https: {
    //   key: fs.readFileSync(`${__dirname}/src/assets/localhost-key.pem`),
    //   cert: fs.readFileSync(`${__dirname}/src/assets/localhost.pem`),
    // },
  },
})
