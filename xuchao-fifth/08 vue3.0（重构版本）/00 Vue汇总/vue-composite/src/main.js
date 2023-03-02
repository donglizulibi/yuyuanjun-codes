import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'

import Card from "./components/vueThree/dVueInject/AllProvideInjectComponents/Global/Card.vue"
import XInput from "./components/vueThree/dVueInject/AllProvideInjectComponents/Global/XInput.vue"
import XTextarea from "./components/vueThree/dVueInject/AllProvideInjectComponents/Global/XTextarea.vue"

// import aGlobalComponent from './components/vueThree/bVueComponent/aGlobalComponent'

const pinia = createPinia()
console.dir(pinia)
const app = createApp(App)

app.component('card', Card)
app.component('x-input', XInput)
app.component('x-textarea', XTextarea)

app.config.unwrapInjectedRef = true

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