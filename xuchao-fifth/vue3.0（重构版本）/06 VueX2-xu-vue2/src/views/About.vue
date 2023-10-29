<template>
  <div class="about">
    <h1>123</h1>
    <h2>{{$store.state.msg}}</h2>
    <h2>人民币：{{rmb}}</h2>
    <h2>美元：{{doller}}</h2> 
    <button v-on:click="cost">花钱</button>
    <button v-on:click="save">存钱</button>
    <button v-on:click="get">还钱</button>
    <h2>{{actnumberincom}}</h2>
    <button v-on:click='startaction(100)'>actions</button>
  </div>
</template>

<script>
  // import store from "../store"
  export default {
    data(){
      // data里面就算是没有数据也要加上一个return，返回一个空的大括号，否则会报错
      return{}
    },
    mounted(){
      console.log(this.$store.state.msg)
    },

    // computed:{
    //   info(){
    //     return this.$store.state.msg
    //   }
    // }

    computed:{
    //   info(){
    //     return this.$store.state.money
    //   },

    //   // 调用getters里的值,rmb是getter的变量
      rmb(){
        return this.$store.state.money
      },

      doller(){
        return this.$store.getters.doller
      },

      // 这里有一个要注意的问题就是在vuex的state的money在组件计算属性里改名成了rmb
      // 而在vuex的getters的doller在组件里也是叫doller，其实一般是不推荐改名的
      // 包括在methods里也是这样

      actnumberincom(){
        return this.$store.state.actnumber
      }
    },

    // 只有data和八个生命周期是(){}的形式，其他的都是：{} 的形式。
    methods:{
      // store对象里面有个commit方法提交mutation
      cost(){
        this.$store.commit("pay",10)
        // 这里不用加return
      },
      save(){
        this.$store.commit("back",{acount:2})
      },

      // 工作中更加推荐这种写法，其中type是关键字，其他的属性名随便
      get(){
        this.$store.commit({
          type:"payback",
          acount:10
        })
      },

      // startaction(){
      //   this.$store.dispatch("testact",{count:20})
      // }
      startaction(a){
        this.$store.dispatch({
          type:"testact",
          count:a
        }).then((res)=>{
          console.log(11,res)
        })
      }
    }
  }
</script>

<style lang="less" scoped>

</style>