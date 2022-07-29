const app = Vue.createApp({
    data() {
        return {
            name: '根组件'
        }
    },
    template: `<div>{{name}}<xj></xj></div>`
})


app.component('xj', {
    data() {
        return {
            name: 'hoduunren'
        }
    },
    template: `<h2>{{name}}</h2>`
})

const vm = app.mount('#app')

// 在这个例子中，是先创建一个根组件，再用component创建一个子组件
// component需要设置两个参数，第一个是放子组件的名字，第二个就是子组件具体的配置

// 最后mount方法应该是在根组件和子组件都设置完了以后，才使用

console.log(app) // 里面有mount方法
console.log(vm) // 是一个Proxy，也就是根组件的实例
console.log(vm.name) // 可以读取到name
console.log(vm.$data.name) // 或者用另一种方法来读取

// 另外还需要注意一点，name的取值，是在挂载之后发生的