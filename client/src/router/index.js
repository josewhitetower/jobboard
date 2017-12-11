import Vue from 'vue'
import Router from 'vue-router'
import JobBoard from '@/components/JobBoard'
import Register from '@/components/Register'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'JobBard',
      component: JobBoard
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: JobBoard
    }
  ]
})
