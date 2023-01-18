import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component:() => import('../layout'),
    redirect: '/users',
    children: [
      {
        path: 'users',
        name: 'users',
        component: () => import('@/views/users/index.vue')
      },
      {
        path: 'categories',
        name: 'categories',
        component: () => import('@/views/categories/index.vue')
      },
      {
        path: 'goods',
        name: 'goods',
        component: () => import('@/views/goods/index.vue')
      },
      {
        path: 'orders',
        name: 'orders',
        component: () => import('@/views/orders/index.vue')
      },
      {
        path: 'params',
        name: 'params',
        component: () => import('@/views/params/index.vue')
      },
      {
        path: 'reports',
        name: 'reports',
        component: () => import('@/views/reports/index.vue')
      },
      {
        path: 'rights',
        name: 'rights',
        component: () => import('@/views/rights/index.vue')
      },
      {
        path: 'roles',
        name: 'roles',
        component: () => import('@/views/roles/index.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component:() => import('../views/login/Login.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

//导入nprogress
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'
router.beforeEach((to, from, next) => {
  Nprogress.start()
  next()
})

router.afterEach((to,from) =>{
  Nprogress.done()
})

export default router
