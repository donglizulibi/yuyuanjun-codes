// 本模块起到一个快捷访问的作用
// getters其实就是vuex中的计算属性

const getters = {
  token: (state) => state.user.token
}

export default getters
