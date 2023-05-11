import Home from "../views/Home.vue"
import About from "../views/About.vue"
import { ref } from "vue"

export const router = {
    routes: [
        { path: '/', component: Home },
        { path: '/about', component: About }
    ]
};

export const path = ref(window.location.pathname)

// export { router }