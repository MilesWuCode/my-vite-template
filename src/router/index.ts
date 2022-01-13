import { createRouter, createWebHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'

const router = createRouter({
  history: createWebHistory(),
  routes: setupLayouts(generatedRoutes),
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || new Promise((resolve) => {
      setTimeout(() => resolve({ top: 0, behavior: 'smooth' }), 300)
    })
  },
})

export default router