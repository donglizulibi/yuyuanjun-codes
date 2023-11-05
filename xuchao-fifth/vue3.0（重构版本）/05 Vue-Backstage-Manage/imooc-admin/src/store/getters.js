// 本模块起到一个快捷访问的作用
// getters其实就是vuex中的计算属性

const getters = {
  token: (state) => state.user.token,

  // 如果return的值是true, 则表示用户信息已经存在
  hasUserInfo: (state) => {
    return JSON.stringify(state.user.userInfo) !== '{}'
  }
}

export default getters
