const app = Vue.createApp({
    data() {
        return {
            name: 'houdunren',
            num: 1,
            tip: ''
                // dateNum:0
        }
    },
    methods: {
        // 在这里提到了把error作为函数放在methods的方法
        // 在这个例子中是没有区别的，但是如果是比较大的数据放在methods
        // 则每一次页面更新，都会调用methods，就造成了性能的浪费

        // 而把这个error放在计算属性computed里，只有里面的响应式数据变化了
        // computed才会计算

        add() {
            this.error = '提示：'
            console.log(this.error)
            if (this.num < 10) {
                this.num++
            }
        },
        desc() {
            this.error = '警告：'
            console.log(this.error)
            if (this.num > 0) {
                this.num--
            }
        }
    },
    computed: {
        date() {
            return new Date()
        },
        dateNum() {
            return new Date().getTime()
        },

        // 如果要把这个方法改成访问器的形式，那就需要变成对象
        // error() {
        //     return this.num == 0 ? '不能小于0' : this.num == 10 ? '不能大于10' : ''
        // }

        // 在访问器的set中就可以实现定制前面的提示语句的功能
        error: {
            set(tip) {
                this.tip = tip
            },
            get() {
                const message = this.num == 0 ? '不能小于0' : this.num == 10 ? '不能大于10' : ''
                if (message) {
                    return this.tip + message
                }

                // 如果增加和减少的数值在正常范围内，也就是说不是0或者10的时候，message是空字符
                // error也就是没有返回值，add和desc中的打印this.error就是undefined
            }

        }
    }
})

const vm = app.mount('#app')

console.log(vm)
    // 在这里显示，error也是一个对象，初始显示是undefined
    // 所以error不在data里面定义，只在computed里面定义，就可以成为内部的对象