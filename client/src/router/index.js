import Vue from 'vue'
import Router from 'vue-router'
import JobBoard from '@/components/JobBoard'
import JobAdd from '@/components/JobAdd'
import Index from '@/components/Index'
import Register from '@/components/Register'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index ',
      component: Index
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: JobBoard
    },
    {
      path: '/add',
      name: 'add',
      component: JobAdd
    }
  ]
})
