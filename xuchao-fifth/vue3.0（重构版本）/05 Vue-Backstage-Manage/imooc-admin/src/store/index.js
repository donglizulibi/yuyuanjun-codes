import { createStore } from 'vuex'
import user from './modules/user'
import getters from './getters'

export default createStore({
  state: {},

  // 引入getters模块，注册为vuex中的getters
  getters,
  mutations: {},
  actions: {},
  modules: {
    user
  }
})
