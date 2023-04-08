import { createRouter, createWebHashHistory, createWebHistory } from "vue-router"
import Home from "../views/Home.vue"
import Article from "../views/Article.vue"
import Show from "../views/Show.vue"

const router = createRouter({
    history: createWebHistory(),
    // history: createWebHashHistory(),
    // linkActiveClass:""
    // linkExactActiveClass:""


    routes: [
        { path: '/', meta: { class: "home" }, name: "home", component: Home },
        { path: '/article', meta: { class: "article" }, name: "article", component: Article },
        { path: '/show/:id', name: "show", component: Show },
        // { path: '/show', name: "show", component: Show },
    ]
})

export { router }