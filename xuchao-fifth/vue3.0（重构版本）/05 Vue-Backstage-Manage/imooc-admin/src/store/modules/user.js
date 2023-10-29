// 此模块负责处理所有和用户相关的数据

import { login } from '@/api/sys'
import md5 from 'md5'

export default {
  namespaced: true,
  // 设置这个属性为true表示这是一个单独的模块，不会被合并到其他模块中

  state: () => ({}),
  mutations: {},
  actions: {
    /**
     *
     * 登录请求动作
     */
    login(context, userInfo) {
      const { username, password } = userInfo
      return new Promise((resolve, reject) => {
        login({
          username,
          password: md5(password)
          // 这里的password使用md5进行加密处理
        })
          .then((data) => {
            resolve()
          })
          .catch((error) => {
            reject(error)
          })
      })
    }
  }
}
