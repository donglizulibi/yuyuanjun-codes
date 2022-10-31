class Hd {
    // 首先是定义三种状态
    static PENDING = "pending"
    static FULFILLED = "fulfilled"
    static REJECTED = "rejected"
    constructor(executor) {
        // promise在创建的时候是pending状态
        // 所以这就是status的初始值就是
        this.status = Hd.PENDING

        // 再定义一个value值,当promise的状态改变
        // 会把这个value值resolve到下一个then当中
        // 初始值为null
        this.value = null

        // 下面定义并执行一个函数，这个函数就新建promise实例的时候
        // 给构造函数传进去的回调函数
        // 这个回调函数有两个参数就是resolve和reject
        // executor()
    }
}

new Promise((resolve, reject) => {

})