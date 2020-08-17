import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Longin = () => import('../views/login/login.vue')
const Index = ()=>import('../views/index/index.vue')
const Home  = ()=>import('../views/home/home.vue')
const Users  = ()=>import('../views/users/users.vue')//用户列表
const Roles = ()=>import('../views/roles/roles.vue')//角色列表
const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: Longin
  },
  {
    path:'/index',
    name:'index',
    component:Index,
    redirect:'/home',
    children:[
      {
        path:'/home',
        name:'home',
        component:Home
      },
      {
        path:'/users',
        name:'users',
        component:Users,
      },
      {
        path:'/roles',
        name:'roles',
        component:Roles
      }

    ]
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
