/**
 * 存储数据
 *
 */
export const setItem = (key, value) => {
  // value 分为两种情况
  //  1 基本数据类型
  //  2 复杂数据类型
  if (typeof value === 'object') {
    // 如果是复杂数据类型，就转化一下格式
    value = JSON.stringify(value)
  }
  window.localStorage.setItem(key, value)
}

/**
 * 获取数据
 *
 */
export const getItem = (key) => {
  const data = window.localStorage.getItem(key)

  // 如果data是json数据格式的，要转成对象格式再返回
  // 但是判断一个数据是否是json格式，是比较麻烦的，所以直接使用try catch
  // 不论是不是json格式的，都转化为对象，如果转化不成功，则返回原数据
  try {
    return JSON.parse(data)
  } catch (error) {
    return data
  }
}

/**
 * 删除指定数据
 */

export const removeItem = (key) => {
  window.localStorage.removeItem(key)
}

/**
 * 删除所有数据
 *
 */
export const removeAllItem = () => {
  window.localStorage.clear()
}
