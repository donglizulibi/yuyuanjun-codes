<template>
  <div class="home">
    <h2>{{itself}}</h2>
    <h2>{{a}}</h2>
    <h2>{{b}}</h2>
    <h2>{{c}}</h2>
    <h2>{{d}}</h2>

    <button @click="changea">改a</button>
    <button @click="changeb">改b</button>
    <button @click="changec">改c</button>
    <button @click="changeback">改回去</button>
    <h2>{{text}}</h2>
    <h2>{{aa}}</h2>
    <h2>{{bb}}</h2>
    <button @click="changeM">改子模块的数据</button>
    <h1>{{abcd}},{{bcde}}</h1>
    <h3>{{cc}}</h3>
    <h3>{{abc}}</h3>
    <button @click="changeM_C">改C模块的数据</button>
  </div>
</template>

<script>
// @ is an alias to /src

import {mapState,mapMutations,mapGetters} from "vuex"

export default {
  data(){
    return{
      
    }
  },

  // computed:{
  //   a(){
  //     return this.$store.state.a;
  //   },
  //   b(){
  //     return this.$store.state.b;
  //   },
  //   c(){
  //     return this.$store.state.c;
  //   },
  //   d(){
  //     return this.$store.state.d;
  //   },
  // }

  // var state=this.$store.state


/*
  computed:mapState({
    // a:(state)=>{return state.a} 可以简化为
    a:state=>state.a,
    // 小括号里的state可以理解为this.$store.state的简写
    b:state=>state.b,
    c:state=>state.c,
    d:state=>state.d
  }),

*/
  
// 上面的代码还可以进一步简化为（前提是要映射的属性和要映射的名字是一样的才行）
  computed:{
    itself(){
      return "世人都晓神仙好，唯有功名忘不了"
    },
    aa(){
      return this.$store.state.moduleA.text
    },
    // 下面这条语句的text拿到的是根模块的text
    ...mapState(['a','b','c','d','text']),
    ...mapState({
      bb:state=>state.moduleB.text,
      cc:state=>state.moduleC.text
    }),
    ...mapGetters(["abcd",'bcde']),
    // abc(){
    //   return this.$store.getters.moduleA.abc
    // }
    ...mapGetters({
      abc:'moduleC/abc'
    })
  },

  methods:{
    ...mapMutations(['changea','changeb','changec','changeback']),
    ...mapMutations(['changeM']),
    // 在开启了命名空间之后，上面的changeM不能修改模块c的数据
    // 注意不要重名
    ...mapMutations({
      changeM_C:'moduleC/changeM'
    })

    /*
      开启命名空间之后调用子模块方法的另一种方式
      ...mapMutation('moduleC',["changeM",  ,  ,])
      这种方法就默认重名
    */
  },
  
  mounted(){
    console.log(1,mapState(['a','b','c','d']))
    console.log(2,{...mapState(['a','b','c','d'])})
  }

  // 那么就要考虑到以这种方式形成的计算属性和本身的计算属性的冲突问题
}
</script>
