import { createRouter, createWebHashHistory, createWebHistory } from "vue-router"
import Home from "@/views/Home.vue"
import Article from "@/views/article/List.vue"
import UserList from "@/views/user/List.vue"
import Show from "@/views/article/Show.vue"
import UserShow from "@/views/user/Show.vue"

const router = createRouter({
    history: createWebHistory(),
    // history: createWebHashHistory(),
    // linkActiveClass:""
    // linkExactActiveClass:""


    routes: [
        { path: '/', meta: { class: "home" }, name: "home", component: Home },
        { path: '/article', meta: { class: "article" }, name: "article", component: Article },
        { path: '/show/:id(\\d+)', name: "show", component: Show },

        { path: '/user', name: "user", component: UserList },
        { path: '/user/:id', name: "user-show", component: UserShow },
        // { path: '/show', name: "show", component: Show },
    ]
})

export { router }