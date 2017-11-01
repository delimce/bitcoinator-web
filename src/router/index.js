import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/components/initial/login'
import signup from '@/components/initial/signup'
import reset from '@/components/initial/reset'
import confirm from '@/components/initial/confirm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/signup',
      name: 'signup',
      component: signup
    },
    {
      path: '/reset',
      name: 'reset',
      component: reset
    },
    {
      path: '/confirm',
      name: 'confirm',
      component: confirm
    }
  ]
})
