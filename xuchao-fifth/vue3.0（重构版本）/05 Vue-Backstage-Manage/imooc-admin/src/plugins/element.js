import ElementPlus from 'element-plus'
// import 'element-plus/lib/theme-chalk/index.css'
// import locale from 'element-plus/lib/locale/lang/zh-cn'

import 'element-plus/dist/index.css'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

export default (app) => {
  app.use(ElementPlus, {
    locale: zhCn
  })
}
