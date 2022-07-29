class Lesson {
    data = []
    init() {
        // 假设在这里有一个请求后台数据的操作
        this.data = [{ name: 'js' }, { name: 'vue.js' }]
    }
    get() {
        return this.data
    }
}

let obj = new Lesson()

// 初始化数据，只会初始化这一次
obj.init()

export { obj }