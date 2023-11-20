// 此模块负责处理所有和用户相关的数据

import { login, getUserInfo } from '@/api/sys'
import md5 from 'md5'
import { setItem, getItem } from '@/utils/storage'
import { TOKEN } from '@/constant'
import router from '@/router'

export default {
  namespaced: true,
  // 设置这个属性为true表示这是一个单独的模块，不会被合并到其他模块中

  state: () => ({
    // 为了达到用户自动登录的目的，不能将token的初始值设置为空字符串
    // 而是先看看浏览器中是不是已经保存了token
    token: getItem(TOKEN) || '',
    userInfo: {}
  }),
  mutations: {
    // 因为需要在vuex另外存一份token数据，所以把保存token的操作放在mutations中
    // 这个mutation动作在actions里的登陆成功之后进行触发
    setToken(state, token) {
      state.token = token
      // console.log(state)
      setItem(TOKEN, token)
    },
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo
    }
  },
  actions: {
    /**
     *
     * 登录请求动作
     */
    login(context, userInfo) {
      console.log('store user context:', context)
      const { username, password } = userInfo
      return new Promise((resolve, reject) => {
        login({
          username,
          password: md5(password)
          // 这里的password使用md5进行加密处理
        })
          .then((data) => {
            // console.log('vuex login:', data)
            this.commit('user/setToken', data.token)
            // 登录完成之后跳转到layout
            // 在vuex中使用vue-router
            router.push('/')
            resolve()
          })
          .catch((error) => {
            reject(error)
          })
      })
    },

    // 获取用户信息
    async getUserInfo(context) {
      // console.log('getUserInfoStoreFunc')
      // console.log(getUserInfo)
      const res = await getUserInfo()
      // console.log(res)
      this.commit('user/setUserInfo', res)
      return res
    }
  }
}
