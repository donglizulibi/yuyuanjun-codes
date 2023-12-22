// 本文件夹的作用是为了统一保存内部图标，并全局注册这些内部图标

import SvgIcon from '@/components/SvgIcon'
// console.log(SvgIcon)
// 1. 导入所有的 svg 的图标

// webpack 依赖管理 require.context方法
// require.context可以传入三个参数，第一个是要搜索的目录
// 第二个是标记是否还搜索其子目录，第三个是匹配文件的正则表达式
const svgRequire = require.context('./svg', false, /\.svg$/)

// 同时svgRequire作为对象还有内置方法keys
// 可以通过 svgRequire.keys() 获得所有的 svg 图标

// 遍历图标，把图标作为 request 参数导入到 svgRequire 导入函数中
// 完成本地 svg 图标的导入

console.log(svgRequire)
console.dir(svgRequire)
console.log(svgRequire.keys())

// 课程中的写法
// svgRequire.keys().forEach((svgIcon) => {
//   svgRequire(svgIcon)
// })

// 这种是文档中的写法
function importAll(r) {
  r.keys().forEach(r)
}

importAll(svgRequire)
// 完成多个本地svg图标的导入之后，还要把各个图标注册为全局组件

// 2. 完成 SvgIcon 的全局注册
//    这一步仅仅只是把SvgIcon组件导进来，然后又封装一个函数导出去
//    和第一个步骤的导入本地图标似乎没有关系，仅做到这一步，图标是不会显示的

//    这是因为在webpack中缺少专门配置svg格式的loader，所以要加上这个专门的loader

//    具体分为两步
//    第一，下载处理svg的loader，npm i --save-dev svg-sprite-loader@6.0.9 （这里是为了和课程保持一致）
//    第二，修改webpack配置，也就是修改vue.config.js文件
//         在这里使用 chainWebpack 这种链式修改的方法 使用 svg-sprite-loader 方法
//         另外还有一种简单配置方法，也就是 configureWebpack 的方法

export default (app) => {
  app.component('svg-icon', SvgIcon)
}
