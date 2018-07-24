import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/Home/index'
import Test from '@/view/Testpg/index/'

Vue.use(Router)

export default new Router({
  routes: [
    {
    	path: '/test',
    	name: 'Test',
    	component: Test
    },
    {
    	path: '/',
    	name: 'Home',
    	component: Home
    }
  ]
})
