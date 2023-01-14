import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: '/',
    component:() => import('../layout/index.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component:() => import('../views/Login.vue')
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
