import { createRouter, createWebHistory } from "vue-router"
import home from "@/views/home.vue"
import about from "@/views/about.vue"
import login from "@/views/login.vue"

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
        },
        {
            path: '/login',
            name: 'login',
            component: login
        }
    ]
})

// router.beforeEach((to, from, next) => {
//     if (to.name == 'about') {
//         next('/login')
//     } else {
//         next()
//     }
// })

router.beforeEach((to, from) => {
    // console.log('to', to)
    // console.log('from', from)
    // console.log('to\'name:', to.name)
    // console.log('from\'name:', from.name)

    // return true

    // if (to.name == 'about') {
    //     return '/login'
    // }

    // console.log('beforeEach')
    // return false
})


router.beforeResolve((to, from) => {
    // console.log('beforeResolve')
})
const routesArr = []
router.afterEach((to, from, fail) => {
    console.log('afterEach')
    console.log('afterEach', to.name)
    if (!fail) {
        routesArr.push(to.name)
            // 把浏览过的页面存在本地缓存中
        localStorage.setItem('routesArr', JSON.stringify(routesArr))
    }

})


export { router }