import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Longin = () => import('../views/login/login.vue')
const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: Longin
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
// 判断非法登录
router.beforeEach((to, from, next) => {
  // 如果用户访问登录页面的话就直接放行
  if (to.path == '/login') return next()

  const token = sessionStorage.getItem('token')

  if (!token) return next('/login')
  next()
})

export default router
