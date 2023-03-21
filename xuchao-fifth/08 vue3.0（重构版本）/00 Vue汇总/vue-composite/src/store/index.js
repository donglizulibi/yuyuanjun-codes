import { defineStore } from "pinia"

// 1）定义容器
// 2）使用容器中的state
// 3）修改state
// 4）容器中的action的使用


// 参数1：容器的id，必须唯一，将来pinia会把所有的容器挂载到根容器上 
// 参数2：选项对象
const useMainStore = defineStore('main', {

    /*
     * state 类似于组件的data，用来存储全局状态
     * 必须是函数，为了在服务端渲染的时候避免交叉请求导致数据状态污染
     * 且必须是箭头函数，为了更好的ts类型推导
     */
    state: () => {
        return {
            count: '这里是pinia的数据'
        }
    },

    /*
     * getters 类似于组件的组件的计算属性，用来封装计算属性，有缓存的功能
    
     */
    getters: {},

    /*
     * actions 类似于methods，用于封装罗技，修改state 
     */
    actions: {}
})



export default useMainStore