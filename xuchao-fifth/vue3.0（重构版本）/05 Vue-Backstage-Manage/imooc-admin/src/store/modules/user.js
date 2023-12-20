// 此模块负责处理所有和用户相关的数据

import { login, getUserInfo } from '@/api/sys'
import md5 from 'md5'
import { setItem, getItem, removeAllItem } from '@/utils/storage'
import { TOKEN } from '@/constant'
import router from '@/router'
import { setTimeStamp } from '@/utils/auth'

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
            this.commit('user/setToken', data.token)
            console.log('vuex login:', data)
            // 登录完成之后跳转到layout
            // 在vuex中使用vue-router
            router.push('/')
            setTimeStamp()
            // 保存登录时间
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
      console.log(res)
      this.commit('user/setUserInfo', res)
      return res
    },

    // 退出登录
    logout() {
      // 1 清除当前用户的缓存数据, 包括vuex中的和缓存中的数据
      this.commit('user/setToken', '')
      this.commit('user/setUserInfo', {})
      removeAllItem()
      // 2 清除权限相关配置（暂时没有设置权限相关配置）
      // 3 返回到登陆页面
      router.push('/login')
    }
  }
}
