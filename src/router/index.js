import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Login from '@/components/user/Login'
import Zone from '@/components/main/Zone'
import Classify from '@/components/main/Classify'
import Home from '@/components/main/Home'
import Me from '@/components/main/Me'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/main',
      name: 'Main',
      component: Main,
      // 配置嵌套路由
      children: [
        {
          path: '/me',
          name: 'Me',
          component: Me
        },
        {
          path: '/zone',
          name: 'Zone',
          component: Zone
        },
        {
          path: '/classify',
          name: 'Classify',
          component: Classify
        },
        {
          path: '/home',
          name: 'Home',
          component: Home
        }
      ]
    },
    {
      path: '/',
      name: 'Login',
      component: Login
    }]
})
