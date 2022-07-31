const app = Vue.createApp({
    data() {
        return {
            name: 'houdunren',
            move: 'click'
        }
    },
    methods: {
        change() {
            alert(123)
        },

        // 关于参数，如果需要获得event，则标签中传实参应该是$event
        go(event, para) {
            console.log(event)
            console.log(para)
            console.log(this) // 这个this就是vm，也就是这个实例化的根组件
        },
        prevent1(event) {
            event.preventDefault()
        },
        prevent2() {

        }
    }
})

const vm = app.mount('#app')

console.log(vm)

// setTimeout(() => {
//     // 注意在这里不用写成onmouseover
//     vm.move = 'mouseover'
// }, 3000)