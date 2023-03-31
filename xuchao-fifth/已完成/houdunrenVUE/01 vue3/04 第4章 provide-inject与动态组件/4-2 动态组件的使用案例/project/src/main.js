import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Card from './components/Global/Card.vue'
import XInput from './components/Global/XInput.vue'
import XTextarea from './components/Global/XTextarea.vue'

console.log(Card)

const app = createApp(App)
app.config.unwrapInjectedRef = true

app.component('card', Card)
app.component('x-input', XInput)
app.component('x-textarea', XTextarea)

const xm = app.mount('#app')