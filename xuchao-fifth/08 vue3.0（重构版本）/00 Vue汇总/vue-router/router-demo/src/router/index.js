import { createRouter, createWebHashHistory, createWebHistory } from "vue-router"
import Home from "../views/Home.vue"
import Article from "../views/Article.vue"

const router = createRouter({
    history: createWebHistory(),
    // history: createWebHashHistory(),
    // linkActiveClass:""
    // linkExactActiveClass:""

    routes: [
        { path: '/', name: "home", component: Home },
        { path: '/article', name: "article", component: Article },
    ]
})

export { router }