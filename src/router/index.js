import Vue from 'vue'
import Router from 'vue-router'
import HomePg from '@/view/HomePg'
import MyPage from '@/view/MyPage'

Vue.use(Router)

export default new Router({
  routes: [
      {
      path: '/mypage',
      name: 'MyPage',
      component: MyPage
    },
    {
      path: '/',
      name: 'HomePg',
      component: HomePg
    }
  ]
})
