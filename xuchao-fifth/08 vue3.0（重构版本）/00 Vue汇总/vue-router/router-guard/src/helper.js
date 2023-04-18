// 表示是否有验证密码
const loginToken = false
const loginCheck = (to, from, next) => {
    if (!loginToken && to.meta.auth) {
        next('/login')
    } else {
        next()
    }
}

export { loginCheck }