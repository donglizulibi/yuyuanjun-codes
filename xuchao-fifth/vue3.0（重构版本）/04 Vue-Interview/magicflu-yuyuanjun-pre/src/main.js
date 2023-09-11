import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { router } from "./router/index"
import installElementPlus from './plugins/element'




// import zhCn from 'element-plus/dist/locale/zh-cn.mjs'


// import ElementPlus from 'element-plus';
// import 'element-plus/dist/index.css';



const app = createApp(App)
app.use(router)
app.use(installElementPlus)

// app.use(ElementPlus, {
//     locale: zhCn,
// })

app.mount('#app')