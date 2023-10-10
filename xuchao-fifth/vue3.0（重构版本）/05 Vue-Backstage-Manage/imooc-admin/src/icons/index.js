import SvgIcon from '@/components/SvgIcon'
console.log(SvgIcon)
// 1. 导入所有的 svg 的图标

// webpack 依赖管理 require.context方法
// require.context可以传入三个参数，第一个是要搜索的目录
// 第二个是标记是否还搜索其子目录，第三个是匹配文件的正则表达式
const svgRequire = require.context('./svg', false, /\.svg$/)

// 此时返回了一个 Require 函数，可以接收一个 request 的参数
// 用于 require 导入，该函数提供了三个属性
// 可以通过 svgRequire.keys() 获得所有的 svg 图标

// 遍历图标，把图标作为 request 参数导入到 svgRequire 导入函数中
// 完成本地 svg 图标的导入

console.log(svgRequire.keys())
svgRequire.keys().forEach((svgIcon) => {
  svgRequire(svgIcon)
})

// 2. 完成 SvgIcon 的全局注册

export default (app) => {
  app.component('svg-icon', SvgIcon)
}
