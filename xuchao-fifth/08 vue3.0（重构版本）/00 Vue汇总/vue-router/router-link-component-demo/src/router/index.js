import Home from "../views/Home.vue"
import About from "../views/About.vue"

export const router = {
    routes: [
        { path: '/', component: Home },
        { path: '/about', component: About }
    ]
};

// export { router }