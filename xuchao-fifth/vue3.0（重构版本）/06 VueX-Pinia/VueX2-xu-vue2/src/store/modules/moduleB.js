export default {
    state: {
        text: '我是模块B'
    },
    getters: {
        abcd() {
            return '我是B的getter'
        }
    },
    mutations: {
        changeM(state) {
            state.text = '模块B的数据变了'
        }
    },
    actions: {}
}