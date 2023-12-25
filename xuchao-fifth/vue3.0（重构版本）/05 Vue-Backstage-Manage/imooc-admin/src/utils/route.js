import path from 'path'

// 得到二级路由
const getChildrenRoutes = (routes) => {
  const res = []
  routes.forEach((route) => {
    if (route.children && route.children.length > 0) {
      res.push(...route.children)
    }
  })
  return res
}

/**
 * 处理重复的二级路由
 */
export const filterRoutes = (routes) => {
  const childrenRoutes = getChildrenRoutes(routes)
  const routesRes = routes.filter((route) => {
    const findItem = childrenRoutes.find((childrenRoute) => {
      return childrenRoute.path === route.path
    })
    return findItem === undefined
  })

  return routesRes
}

/**
 * 判断数据是否为空值
 */
function isNull(data) {
  if (!data) return true
  if (JSON.stringify(data) === '{}') return true
  if (JSON.stringify(data) === '[]') return true
}

/**
 * 根据 routes 数据，返回对应的 menu 规则数据
 */
export const generateMenus = (routes, basePath = '') => {
  const result = []
  routes.forEach((item) => {
    // 1 不存在 children 也不存在meta，这个子项不需要
    if (isNull(item.children) && isNull(item.meta)) return

    // 2 存在children，不存在meta，使用递归迭代
    if (isNull(item.meta) && !isNull(item.children)) {
      // console.log(item.children)
      result.push(...generateMenus(item.children))
      return
    }

    // console.log(123)
    const routePath = path.resolve(basePath, item.path)

    // 在路由分离之后，可能会存在同名父路由的情况，需要单独处理
    let route = result.find((f) => f.path === routePath)

    //   不存在children，存在meta，直接添加进路由表中
    //   因为最终的menu菜单需要有跳转的功能
    //   所以需要合并path，这里用到nodejs中path模块的resolve方法

    // 当前路由尚未加入到result中
    // console.log(route)
    if (!route) {
      route = {
        ...item,
        path: routePath,
        children: []
      }
      if (route.meta.icon && route.meta.title) {
        result.push(route)
      }
    }

    // 3 存在 children, 也存在meta
    if (!isNull(item.children)) {
      route.children.push(...generateMenus(item.children, route.path))
    }
  })

  // console.log(result)
  return result
}
