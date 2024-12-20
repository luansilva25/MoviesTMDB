/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router/auto'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: import('../pages/Home.vue')
    },
    {
      path: '/movie/details/:id',
      name: 'movie',
      component: import('../pages/MovieDetails.vue')
    },
    {
      path: '/movies',
      name: 'movies',
      component: import('../pages/Movies.vue')
    },
    {
      path: '/series',
      name: 'series',
      component: import('../pages/Series.vue')
    }
]
})

// Workaround for https://github.com/vitejs/vite/issues/11804

export default router
