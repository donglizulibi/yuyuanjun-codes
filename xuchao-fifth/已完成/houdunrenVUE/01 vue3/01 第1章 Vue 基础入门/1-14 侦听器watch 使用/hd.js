const app = Vue.createApp({
    data() {
        return {
            num: 1,
            error: ''
        }
    },
    watch: {
        // 侦听器的语法是把要监听的响应式数据名作为方法的名称写在watch里面
        // 这个方法自带两个形参，第一个参数显示响应式数据改变后的新值
        // 第二个参数显示响应式数据改变前的旧值
        // 形参的名称可以是任意字符

        num(newValue, oldValue) {
            console.log(newValue, oldValue)
            this.error = newValue == 0 ? '不能小于0' : newValue == 10 ? '不能大于10' : ''
        }
    },
    methods: {
        add() {
            if (this.num < 10) {
                this.num++
            }
        },
        desc() {
            if (this.num > 0) {
                this.num--
            }
        }
    }
})

const vm = app.mount('#app')