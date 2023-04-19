import { createRouter, createWebHashHistory, createWebHistory } from "vue-router"
import Home from "@/views/Home.vue"
import Article from "@/views/front/article/List.vue"
import UserList from "@/views/front/user/List.vue"
import Show from "@/views/front/article/Show.vue"
import UserShow from "@/views/front/user/Show.vue"
import NotFound from "@/views/common/NotFound.vue"
import NavigationUser from "@/components/NavigationUser.vue"
import Front from "@/layout/Front.vue"
import Member from "@/layout/Member.vue"
import Email from "@/views/member/Email.vue"
import Mobile from "@/views/member/Mobile.vue"

const router = createRouter({
    history: createWebHistory(),
    // history: createWebHashHistory(),
    // linkActiveClass:""
    linkExactActiveClass: "link-active",


    routes: [{
            path: '/',
            component: Front,
            name: 'front',
            children: [
                { path: '/', meta: { class: "home" }, name: "home", component: Home },
                { path: 'article', meta: { class: "article" }, name: "article", component: Article },
                // { path: '/show/:id(\\d+)', name: "show", component: Show },

                // 给地址加上前后缀的效果
                { path: 'show/article-:id(\\d+).html', name: "show", component: Show, alias: '/:id(\\d+).html' },

                {
                    path: 'user',
                    name: "user",
                    components: {
                        default: UserList,
                        navigationUser: NavigationUser
                    },
                    alias: ['/hd', '/abc']

                },
                {
                    path: 'user?id=:id',
                    name: "user-show",
                    components: {
                        default: UserShow,
                        navigationUser: NavigationUser
                    },

                },
            ]
        },
        {
            path: '/member',
            component: Member,
            name: 'member',
            children: [
                { path: 'mobile', name: 'mobile', component: Mobile },
                { path: 'email', name: 'email', component: Email }
            ]
        },
        // { path: '/show', name: "show", component: Show },

        { path: '/:any(.*)', component: NotFound },
    ]
})

export { router }