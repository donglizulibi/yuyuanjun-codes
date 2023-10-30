import axios from 'axios'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

service.interceptors.request.use((config) => {
  // 添加 icode  注意课程验证码过期时间
  config.headers.icode = '56A8BEF350C1016B'
  return config
})

export default service
