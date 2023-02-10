import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'

// import aGlobalComponent from './components/vueThree/bVueComponent/aGlobalComponent'

const pinia = createPinia()
console.dir(pinia)
const app = createApp(App)

// app.component('Xj', {
//     template: `<div>houdunren-{{num}}</div>`,
//     data() {
//         return {
//             num: 1111
//         }
//     }

// })



console.dir(app)
app.use(pinia)

app.mount('#app')