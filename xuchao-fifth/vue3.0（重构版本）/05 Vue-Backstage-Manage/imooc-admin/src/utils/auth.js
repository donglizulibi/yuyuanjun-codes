// 在前端判断token是否失效的方法
// 1 在用户登录的时候，记录当前的时间
// 2 制定一个失效时长
// 3 在调用接口的时候，根据当前时间对比登陆时间，看是否超过了失效时长
//   如果超过，则进行退出登录操作
// 4 由于判断是或失效是在调用接口的时候进行的，所以可以在请求拦截器中设置

import { getItem, setItem } from '@/utils/storage'
import { TIME_STAMP, TOKEN_TIMEOUT_VALUE } from '@/constant'
/**
 * 获取时间戳
 */
export function getTimeStamp() {
  return getItem(TIME_STAMP)
}

/**
 * 设置时间戳
 */
export function setTimeStamp() {
  setItem(TIME_STAMP, Date.now())
}

/**
 * 对比是否超时
 */

export function isCheckTimeout() {
  // 当前时间
  const currentTime = Date.now()

  // 缓存时间
  const timestamp = getTimeStamp()
  return currentTime - timestamp > TOKEN_TIMEOUT_VALUE
}
