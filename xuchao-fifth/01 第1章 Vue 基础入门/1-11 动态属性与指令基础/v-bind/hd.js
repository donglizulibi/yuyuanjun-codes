const app = Vue.createApp({
    data() {
        return {
            name: 'houdunrasdffffen',
            // id: 'hd',
            id: null,
            // 如果把一个属性的属性值设置成null或者undefined
            // 这个属性就会消失，所以如果需要让一个属性消失就这样设置就行了

            // 属性初始值
            value: 'address',
            arg: 'id'
        }
    }
})
console.log(Vue)
const vm = app.mount('#app')

// 设置两秒后改变id的值
console.log(vm)
setTimeout(() => {
    vm.id = 'houdunren'
    vm.value = 'https://www.houdunren.com'
    vm.arg = 'href'
}, 2000)