import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'

import installElementPlus from './plugins/element'
import '@/styles/index.scss'

// 导入 svgIcon
import installIcons from '@/icons'
// import axios from 'axios'
// console.log(axios)
// console.log(installIcons)

// 导入路由鉴权模块
import '@/permission.js'

console.log('i18n: ', i18n)
const app = createApp(App)
installElementPlus(app)
installIcons(app)
app.use(i18n).use(store).use(router).mount('#app')
