import { createRouter, createWebHistory } from 'vue-router'
import { homeRoutes } from './home'
import { userRoutes } from './user'
import { useUserSessionStore } from '@/stores/user/useUserSession'

const routes = [
  ...homeRoutes,
  ...userRoutes
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  const authStore = useUserSessionStore()

  if (to.meta.requiresAuth && !authStore.user) {
    next({ name: 'login' })
  } else {
    next()
  }
})

export default router
