import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { router } from "./router/index"

console.log(router)

const app = createApp(App)

app.use(router)
app.mount('#app')