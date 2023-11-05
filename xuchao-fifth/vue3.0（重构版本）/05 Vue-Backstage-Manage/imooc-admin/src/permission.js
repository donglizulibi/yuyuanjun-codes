// 这个模块专门用来处理项目的路由守卫
import router from '@/router'
import store from './store'

// 在这里定义一个页面访问的白名单
// 也就是说，当用户没有登录，任何权限的时候，也可以访问的页面
// 目前只有登录页面，后期可能有404页面等
const whiteList = ['/login']

/**
 * 路由前置守卫
 * @param {*} to 要去哪个页面
 * @param {*} from 从哪个页面来
 * @param {*} next 是否要去
 */

router.beforeEach(async (to, from, next) => {
  /**
   * 对于登录鉴权的定义
   *  1  当用户没有登录的时候，不允许进入除 login 之外的其他页面
   *  2  用户登录后，token 没有过期之前，不允许进入 login 页面
   */

  /**
   * 在这里如果要从store中导入token，需要if(store.state.user.token){}
   * 这样是比较麻烦的，可以在store中创建getters模块，实现快捷访问
   */
  console.log(store)
  console.log(store.getters.token)
  if (store.getters.token) {
    // 可以拿到 token，表示用户已经登录的情况
    // 如果在这个状态下用户要进入 login 页面，则强行跳转至 layout 首页
    if (to.path === '/login') {
      next('/')
    } else {
      // 如果用户要进入的页面不是 login 页面，则正常跳转就可以了
      // 这里判断用户资料是否存在，如果不存在，则获取用户信息
      // 使用store的getters的计算属性来判断用户信息的存在
      if (!store.getters.hasUserInfo) {
        await store.dispatch('user/getUserInfo')
      }
      next()
    }
  } else {
    // 如果用户没有token，则表示没有登录
    // 在这种状态下，用户只能进入 login 页面
    if (whiteList.indexOf(to.path) > -1) {
      next()
    } else {
      next('/login')
    }
  }
})
