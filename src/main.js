// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Cube from 'cube-ui'
import { getToken } from '@/utils/auth'
import Router from 'vue-router'

Vue.use(Cube)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

function noAuth (path) {
  return path && (path === '/login' || path === '/register')
}

router.beforeEach((to, from, next) => {
  console.log('拦截器->token:' + getToken() + to.path)
  if (getToken() || noAuth(to.path)) { // 通过vuex state获取当前的token是否存在
    next()
  } else {
    next({
      path: '/login',
      query: { redirect: to.fullPath }// 将跳转的路由path作为参数，登录成功后跳转到该路由
    })
  }
})
