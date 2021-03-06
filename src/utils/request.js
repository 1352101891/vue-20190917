import axios from 'axios'
import store from '@/store'
import { getToken, TokenKey } from '@/utils/auth'
import constants from './Constants'

// create an axios instance
const service = axios.create({
  baseURL: constants.api.host, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
    if (store.getters.token) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
      config.headers[TokenKey] = getToken()
    }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data

    let cookies = document.cookie
    console.log('cookies:' + JSON.stringify(cookies))
    console.log('request返回數據：' + JSON.stringify(response))
    // if the custom code is not 20000, it is judged as an error.
    if (response.status !== constants.responceCode.success) {
      // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error)
    const toast = this.$createToast({
      time: 5 * 1000,
      txt: error.message
    })
    toast.show()
    return Promise.reject(error)
  }
)

export default service
