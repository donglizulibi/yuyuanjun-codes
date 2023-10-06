/**
 * 判断是否是外部资源
 * @param {*} path
 *
 */

export function isExternal(path) {
  // 如果路径是以这几个字符开头的，则都判断为外部资源
  return /^(http?:|mailto:|tel:|)/.test(path)
}
