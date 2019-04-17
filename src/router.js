import Vue from 'vue'
import Router from 'vue-router'
import Group from './views/Group.vue'
import Gregoire from './views/Gregoire.vue'
import Rabe from './views/Rabe.vue'
import Agriway from './views/Agriway.vue'

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
      path: '/Rabe',
      name: 'Rabe',
      component: Rabe
    },
    {
      path: '/gregoire-besson',
      name: 'gregoire',
      component: Gregoire
    },
    {
      path: '/agriway',
      name: 'agriway',
      component: Agriway
    }
  ]
})
