import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/counter',
    name: 'Counter',
    component: () =>
      import(
        /* webpackChunkName: "counter" */
        '../views/Counter.vue'
      ),
  },
  {
    path: '/vue-portal',
    name: 'Vue Portal',
    component: () =>
      import(
        /* webpackChunkName: "vue-portal" */
        '../views/VuePortal.vue'
      ),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
