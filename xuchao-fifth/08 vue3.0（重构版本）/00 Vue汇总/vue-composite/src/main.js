import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'

const pinia = createPinia()
console.dir(pinia)
const app = createApp(App)

console.dir(app)
app.use(pinia)

app.mount('#app')