const app = Vue.createApp({
    data() {
        return {
            name: 'houdunren',
            num: 1,
            error: ''
        }
    },
    methods: {
        add() {
            this.error = ''
            if (this.num > 9) {
                this.error = '数字不能超过10'
            } else {
                this.num++
            }
        },
        desc() {
            this.error = ''
            if (this.num < 1) {
                this.error = '数字不能小于0'
            } else {
                this.num--
            }
        }
    }
})

const vm = app.mount('#app')