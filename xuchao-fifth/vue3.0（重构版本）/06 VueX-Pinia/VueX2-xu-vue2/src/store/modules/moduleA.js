export default {
    state: {
        text: '我是模块A'
    },
    getters: {
        bcde() {
            return '我是A的getter'
        }
    },
    mutations: {
        changeM(state) {
            state.text = '模块A的数据变了'
        }
    },
    actions: {}
}