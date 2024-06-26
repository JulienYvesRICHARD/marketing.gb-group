import Vue from 'vue'
import Router from 'vue-router'
import Group from './views/Group.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '/',
      name: 'group',
      component: Group
    },
    {
      path: '/*',
      redirect: '/'
    }
  ]
})
