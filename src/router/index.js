import Vue from 'vue'
import Router from 'vue-router'
import HomePg from '@/view/HomePg'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: HomePg
    }
  ]
})
