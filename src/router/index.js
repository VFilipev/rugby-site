import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import( '../views/HomePage.vue'),
  },
  {
    path: '/matches',
    name: 'matches',
    component: () => import( '../views/MatchesView.vue'),
  },
  {
    path: '/events',
    name: 'events',
    component: () => import( '../views/EventsView.vue'),
  },
  {
    path: '/team',
    name: 'team',
    component: () => import( '../views/TeamView.vue'),
  },
  {
    path: '/trophies',
    name: 'trophies',
    component: () => import( '../views/TrophiesView.vue'),
  },
  {
    path: '/school',
    name: 'school',
    component: () => import( '../views/SchoolView.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
