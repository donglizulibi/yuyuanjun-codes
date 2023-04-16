import { createRouter, createWebHistory } from "vue-router"
import home from "@/views/home.vue"
import about from "@/views/about.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [{
            path: '/home',
            name: 'home',
            component: home
        },
        {
            path: '/about',
            name: 'about',
            component: about
        }
    ]
})

router.beforeEach((to, from) => {
    console.log('to', to)
    console.log('from', from)
    console.log('to\'name:', to.name)
    console.log('from\'name:', from.name)

})


export { router }