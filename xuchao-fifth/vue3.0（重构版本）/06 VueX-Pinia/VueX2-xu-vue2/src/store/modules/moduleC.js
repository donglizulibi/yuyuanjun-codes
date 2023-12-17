export default {
    // 开启命名空间，如果没有这条语句，则只有state是局部的，其他都是全局的，开启之后则全部成为局部的
    namespaced: true,
    state: {
        text: '我是模块C'
    },
    getters: {
        abc() {
            return '我是开启了命名空间之后C的getter'
        }
    },
    mutations: {
        changeM(state) {
            state.text = '模块C的数据变了'
        }
    },
    actions: {}
}