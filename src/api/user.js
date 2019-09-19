import request from '../utils/request'
import constants from '../utils/Constants'

export function login (data) {
  return request({
    url: constants.api.login + '?username=' + data.username + '&password=' + data.password,
    method: 'post',
    header: data
  })
}

export function getInfo (token) {
  return request({
    url: constants.api.userInfo,
    method: 'get',
    header: { token }
  })
}

export function logout () {
  return request({
    url: constants.api.logout,
    method: 'post'
  })
}
