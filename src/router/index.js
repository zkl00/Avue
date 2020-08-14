import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const  Longin = ()=>import('../views/login/login.vue')
  const routes = [
  {
    path: '/',
    redirect:'/login'
  },
  {
    path:'/login',
    name:'login',
    component:Longin
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
