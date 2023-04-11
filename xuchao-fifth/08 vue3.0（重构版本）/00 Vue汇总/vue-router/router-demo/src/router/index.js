import { createRouter, createWebHashHistory, createWebHistory } from "vue-router"
import Home from "@/views/Home.vue"
import Article from "@/views/article/List.vue"
import UserList from "@/views/user/List.vue"
import Show from "@/views/article/Show.vue"
import UserShow from "@/views/user/Show.vue"
import NotFound from "@/views/common/NotFound.vue"
import NavigationUser from "@/components/NavigationUser.vue"

const router = createRouter({
    history: createWebHistory(),
    // history: createWebHashHistory(),
    // linkActiveClass:""
    // linkExactActiveClass:""


    routes: [
        { path: '/', meta: { class: "home" }, name: "home", component: Home },
        { path: '/article', meta: { class: "article" }, name: "article", component: Article },
        // { path: '/show/:id(\\d+)', name: "show", component: Show },

        // 给地址加上前后缀的效果
        { path: '/show/article-:id(\\d+).html', name: "show", component: Show },

        {
            path: '/user',
            name: "user",
            components: {
                default: UserList,
                navigationUser: NavigationUser

            }
        },
        { path: '/user/:id', name: "user-show", component: UserShow },
        // { path: '/show', name: "show", component: Show },

        { path: '/:any(.*)', component: NotFound },
    ]
})

export { router }