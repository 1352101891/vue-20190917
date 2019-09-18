import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Login from '@/components/user/Login'
import Circle from '@/components/main/Circle'
import Classify from '@/components/main/Classify'
import Home from '@/components/main/Home'
import Me from '@/components/main/Me'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
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
          path: '/circle',
          name: 'Circle',
          component: Circle
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
      path: '/login',
      name: 'Login',
      component: Login
    }]
})
