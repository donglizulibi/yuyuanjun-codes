import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import RouterLink from "./components/RouterLink.vue"
import RouterView from "./components/RouterView.vue"
const app = createApp(App)
app.component('router-link', RouterLink)
app.component('router-view', RouterView)

app.mount('#app')