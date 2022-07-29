const app = Vue.createApp({
    data() {
        return {
            name: 'hoduunren'
        }
    },
})

const vm = app.mount('#app')

setTimeout(() => {
    vm.name = 'hdcms'
}, 3000)