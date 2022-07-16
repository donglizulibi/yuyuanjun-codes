// Vue.create()
console.log(document.querySelector('#app'))
console.log(Vue.__proto__ == Object.prototype)
console.log(Vue.createApp)
console.log(typeof Vue)
console.log(Vue)

Vue.createApp({
    data() {
        return {
            title: `hdcms`
        }
    },

    template: `<div>asdf-{{title}}</div>`
}).mount('#app')