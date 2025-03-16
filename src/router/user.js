export const userRoutes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/user/LoginView.vue')
  },
  {
    path: '/perfil',
    name: 'perfil',
    component: () => import('@/views/user/ProfileView.vue'),
    meta: {
      requiresAuth: true
    }
  }
]
