import request from '@/utils/request'

/**
 * 封装接口请求模块
 *  return 一个promose示例
 */

/**
 *
 * 封装接口请求动作
 *
 * 希望把这个动作封装到vuex的action中，而不是点击登录之后直接调用接口
 */

export const login = (data) => {
  return request({
    url: '/sys/login',
    method: 'POST',
    data
  })
}

/**
 * 获取用户信息
 * return promise
 */

// 在用户登录，获取token之后的几乎所有请求都要以token作为参数
// 可以把token放在axios的请求拦截器中
export const getUserInfo = () => {
  console.log('apiGetUserInfo')
  return request({
    url: '/sys/profile',
    method: 'GET'
  })
}
