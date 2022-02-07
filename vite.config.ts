import fs from 'fs'
import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import Icons from 'unplugin-icons/vite'
import svgLoader from 'vite-svg-loader'

// 可使用@rollup/plugin-graphql
// import Graphql from '@rollup/plugin-graphql'

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

    svgLoader(),

    // 可使用@rollup/plugin-graphql
    // Graphql(),
  ],

  // build: {
  //   cssCodeSplit: true,
  //   sourcemap: true,
  //   // chunkSizeWarningLimit: 500,
  // },

  optimizeDeps: {
    include: [
      '@apollo/client/cache',
      '@apollo/client/core',
      '@headlessui/vue',
      '@vue/apollo-composable',
      '@vueuse/core',
      '@vueuse/firebase/useAuth',
      '@vueuse/head',
      'firebase/app',
      'firebase/auth',
      'graphql-tag',
      'pinia',
      'vee-validate',
      'vue-router',
      'vue-toastification',
      'vue',
      'yup',
    ]
  },

  server: {
    host: '0.0.0.0',
    port: 3000,
    https: {
      key: fs.readFileSync(`${__dirname}/src/assets/localhost-key.pem`),
      cert: fs.readFileSync(`${__dirname}/src/assets/localhost.pem`),
    },
  },
})
