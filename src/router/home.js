import HomeView from '../views/home/HomeView.vue'

export const homeRoutes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/home/AboutView.vue'),
  },
  {
    path: '/pinia',
    name: 'pinia',
    component: () => import('../views/home/PiniaView.vue'),
  },
  {
    path: '/ruta-dinamica',
    name: 'ruta-dinamica',
    component: () => import('../views/home/DynamicRouteView.vue'),
    children: [
      {
        path: ':id',
        name: 'ruta-dinamica-id',
        component: () => import('../views/home/DynamicRouteIdView.vue'),
      },
    ],
  },
  {
    path: '/query',
    name: 'query',
    component: () => import('../views/home/QueryView.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('../views/common/NotFoundView.vue'),
  }
]
