import Vue from 'vue'
import Router from 'vue-router'
import JobBoard from '@/components/JobBoard'
import JobAdd from '@/components/JobAdd'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Job from '@/components/Job'
import JobEdit from '@/components/JobEdit'
import Profile from '@/components/Profile'
import store from './../store/store'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: {
        requiredGuest: true
      }

    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        requiredGuest: true
      }
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: JobBoard
    },
    {
      path: '/jobs/:id',
      name: 'job',
      component: Job
    },
    {
      path: '/jobs/:id/edit',
      name: 'edit',
      component: JobEdit,
      meta: {
        requiredAuth: true
      }
    },
    {
      path: '/add',
      name: 'add',
      component: JobAdd,
      meta: {
        requiredAuth: true
      }
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      meta: {
        requiredAuth: true
      }
    },
    {
      path: '/',
      component: JobBoard}
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiredAuth)) {
    if (!store.state.user) {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiredGuest)) {
    if (store.state.user) {
      next({
        path: '/',
        query: {
          redirect: to.fullPath
        }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
