const app = Vue.createApp({
    data() {
        return {
            name: 'houdunren',
            html: `<div style='background-color:red'>hdcms</div>`,
            html_click: `<h1 onclick="alert('盗取用户信息')">hd</h1>`
        }
    },
})


const vm = app.mount('#app')

// 可以看一下现在的vm有哪些数据
console.log(vm) // __Target__里面有这三个数据
console.log(vm.$data.name)
console.log(vm.$data.html)
console.log(vm.$data.html_click)

// name可以使用定时器修改
setTimeout(() => {
    vm.$data.name = 'houdunwang'
}, 3000)