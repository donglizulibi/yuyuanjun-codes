import axios from 'axios'
import { ElMessage } from 'element-plus'
import store from '@/store'
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

// 添加一个请求拦截器
service.interceptors.request.use(
  (config) => {
    // console.log(config)

    // 在这里统一注入token，首先判断token是否存在
    if (store.getters.token) {
      config.headers.Authorization = `Bearer ${store.getters.token}`
      // 其中Bearer是携带token的标准化标识符
    }

    // 添加 icode  注意课程验证码过期时间
    config.headers.icode = 'D3492F2072598248'
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
    ElMessage.error(error.message)
    return Promise.reject(new Error(error))
  }
)

export default service
