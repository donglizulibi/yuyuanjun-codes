import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import installElementPlus from './plugins/element'
import '@/styles/index.scss'

// 导入 svgIcon
import installIcons from '@/icons'
console.log(installIcons)

const app = createApp(App)
installElementPlus(app)
installIcons(app)
app.use(store).use(router).mount('#app')
