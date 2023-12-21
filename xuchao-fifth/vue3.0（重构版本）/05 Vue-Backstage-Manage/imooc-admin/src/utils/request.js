import axios from 'axios'
import { ElMessage } from 'element-plus'
import store from '@/store'
import { isCheckTimeout } from '@/utils/auth'
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

// 这里在请求和响应拦截器中都设置了对token超时的处理
// 其中请求拦截器中的处理是前端部分设置的
// 响应拦截器的处理是模拟后端服务器设置了token超时时间，在拦截器中进行鉴别

// 添加一个请求拦截器
service.interceptors.request.use(
  (config) => {
    console.log(config)

    // 在这里统一注入token，首先判断token是否存在
    if (store.getters.token) {
      // 判断token是否超时
      if (isCheckTimeout()) {
        // 执行退出动作
        store.dispatch('user/logout')
        return Promise.reject(new Error('token 失效'))
      }

      config.headers.Authorization = `Bearer ${store.getters.token}`
      // 其中Bearer是携带token的标准化标识符
    }

    // 添加 icode  注意课程验证码过期时间
    config.headers.icode = '1218645E3B9AE386'
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 添加一个响应拦截器
service.interceptors.response.use(
  // 请求成功的处理
  (res) => {
    const { success, message, data } = res.data
    // 需要判断当前请求是否成功
    if (success) {
      // 成功返回解析后的数据
      // console.log(data)
      return data
    } else {
      // 失败（请求成功，业务失败），消息提示，导入element中消息组件
      ElMessage.error(message)
      return Promise.reject(new Error(message))
    }
  },
  // 请求失败后的处理
  (error) => {
    // token过期的处理
    if (
      error.response &&
      error.response.data &&
      error.response.data.code === 401
    ) {
      store.dispatch('user/logout')
    }
    ElMessage.error(error.message)
    return Promise.reject(new Error(error))
  }
)

export default service
