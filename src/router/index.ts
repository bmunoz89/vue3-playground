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
  {
    path: '/input',
    name: 'Input',
    component: () =>
      import(
        /* webpackChunkName: "input" */
        '../views/Input.vue'
      ),
  },
  {
    path: '/experimental',
    name: 'Experimental features',
    component: () =>
      import(
        /* webpackChunkName: "experimental" */
        '../views/Experimental.vue'
      ),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
