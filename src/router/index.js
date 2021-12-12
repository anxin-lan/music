import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import store from '@/store/index.js'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/listview',
    name: 'ListView',
    component: () => import('@/views/ListView.vue')
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('@/views/Search.vue')
  },
  {
    path: '/personal',
    name: 'Personal',
    beforeEnter: (to, from, next) => {
      console.log(store.state.user);
      if (store.state.user.isLogin) {
        next()
      } else {
        next("/Login")
      }
    },
    component: () => import('@/views/Personal.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/forgetpass',
    name: 'Forgetpass',
    component: () => import('@/views/ForgetPass.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  // history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
