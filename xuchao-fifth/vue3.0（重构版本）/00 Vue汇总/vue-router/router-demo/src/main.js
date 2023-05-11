import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { router } from "./router/index"
import { createPinia } from 'pinia'

console.log(router)

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)

app.use(router)
app.mount('#app')