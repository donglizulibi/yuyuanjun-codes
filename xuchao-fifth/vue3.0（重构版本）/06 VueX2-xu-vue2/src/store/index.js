import Vue from 'vue'
import Vuex from 'vuex'
import moduleA from './modules/moduleA'
import moduleB from './modules/moduleB'
import moduleC from './modules/moduleC'

Vue.use(Vuex)

// 这个js文件称之为根模块
export default new Vuex.Store({
    // 也是要创建一个vuex的实例
    state: {
        msg: "我是可以全局共享的数据",
        money: 100,
        movie: [],
        actnumber: 100,
        // a: '满纸荒唐言',
        // b: '一把辛酸泪',
        // c: '都云作者痴',
        // d: '谁解其中泪',

        a: 12,
        b: 12,
        c: 12,
        d: 12,
        text: 'i am the data of root modules'
    },

    getters: {
        rate() {
            return 7
        },
        doller(state, getters) {
            return state.money * getters.rate
        }


    },

    // getters: {
    //     car(state) {
    //         state.money -= 10;
    //     }



    // rmb({ money }) {
    //     // 对象的解构赋值
    //     return money * 7
    // }

    /*
    关于在computed和getters里面传参数的方法，以及es6的简写方法
    rate(){
        return (a)=>{return state.money*a}
    }

    等价于
    rate:state=>a=>{return state.money*a}

    所以箭头函数的简写是以键值对的形式呈现的

    */
    // },

    mutations: {
        // 所以这里为什么这里不用加this呢，因为之前都是单文件组件，加上this都是为了指向vue的根实例
        // 而这是一个js文件，加上this就是指向window，所以不用加

        // 关于mutations里面函数的传参数问题，第一个参数默认为state，第二个随便传
        pay(state, num) {
            state.money = state.money - num
        },

        // 传payload（载荷），payload并非关键字，但这是以对象的形式存在的
        // 所以在函数体里还要加上属性名
        // 在组件的methods的commit的第二个参数的位置上再把键值对放在一个对象里一起传进去
        back(state, abc) {
            // state.money += 1
            state.money += abc.acount
        },

        payback(state, payload) {
            state.money += payload.acount
        },

        // action要提交的操作
        actiontest(state, payload) {
            state.actnumber -= payload.count
        },

        changea(state) {
            state.a += 1
        },

        changeb(state) {
            state.b += 1
        },
        changec(state) {
            state.c += 1
        },
        changeback(state) {
            state.a -= 1
            state.b -= 1
            state.c -= 1
        }
    },
    // actions: {
    // asyncPay(context) {
    // axios().then(()=>{

    /*这里再加一条注释，为什么是调用commit方法要用context。
    actions的存在作用其实也是为了调用mutation方法，提交更改共享数据的请求
    并在这个请求之前加上一个异步操作
    也就是说之前在页面组件里使用的this.$store.commit("back")之类的方法
    在这里也是需要调用commit来提交请求的
    而又回到这是一个this.$store的问题，这是一个js文件，this的指向是window
    也不可能可以访问到根实例里面的$store，所以就出现了
    context.commit的方法
    */

    //     context.commit(pay)
    // })
    // }

    // 另外的解构写法
    // pay({commit}){
    //     axios.get().then((res)=>{
    //         commit({
    //             type:'pay',
    //             key:value
    //         })
    //     })
    // }

    // 不解构的方法
    // pay(context){
    //     axios.get().then((res)=>{
    // 请注意，如果不解构的话，commit前面就要加上context
    //         context.commit({
    //             type:'pay',
    //             key:value
    //         })
    //     })
    // }

    // context并不是关键字，在这里或许换成store会更好理解
    // }

    actions: {
        testact(context, payload) {
            // 在这里省略异步操作
            // context.commit('actiontest', { count: 50 })
            // 然而在store里直接传实参是不合理的，'50'这个数字应该在组件的dispatch里面传进去
            // 而且在组件里面也是要以对象的形式传进去比较好

            return new Promise((resolve) => {
                // 用定时器来模拟异步操作
                setTimeout(() => {
                    context.commit('actiontest', payload);
                    resolve("完事了")
                        // 将来可能就是把axios的结果通过resolve(res.result)的方式传到组件中进行下一步操作
                }, 3000)
            })

        }
    },

    // store之下的index.js文件中的modules模块的意义就是在把其他的module模块引入之后在这里注册一下
    modules: {
        /*
        这里面本来是放对象的，这里是es6简写的方式
        moduleA:moduleA,
        moduleB:moduleB
        */
        moduleA,
        moduleB,
        moduleC
    }
})