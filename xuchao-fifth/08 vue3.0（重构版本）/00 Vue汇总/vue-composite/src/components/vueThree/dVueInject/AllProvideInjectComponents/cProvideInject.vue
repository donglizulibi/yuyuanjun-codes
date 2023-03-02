<template>
  <h4>实现数据穿透的方法</h4>
  <h5>1 依赖注入的应用场景是从一个组件传递数据到两层及以上的后代组件中</h5>
  <h5>2 首先在高层级组件中调用provide方法，返回一个变量，变量的值就是需要传递的数据</h5>
  <h5>3 在低层级组件中调用inject的Api，属性值是一个数组，将上面这个变量存入数组</h5>
  <h5>4 则存入数组的变量就可以直接在底层级组件中使用</h5>
  <h5>
    5
    如果传递的数据是字符串，那么如果需要保证这个数据在两个组件之间有响应性，需要引入computed方法
  </h5>
  <h5>
    6 具体的方法是computed(() => data)，如果传递的数据是引用类型数据，则不需要使用computed
  </h5>
  <h5>7 不能使用Vue的computed的Api</h5>
  <h5>8 需要在main.js文件中加上app.config.unwrapInjectedRef = true</h5>
  <h5></h5>
  <div id="div">
    <header>这里是父组件的区域：</header>
    <h6>传递的数据是字符串</h6>
    <input type="text" v-model="content" />{{ content }}
    <br />

    <h6>传递的数据是引用类型</h6>
    <input type="text" v-model="contentObj.str" />{{ contentObj.str }}
    <br />

    <br />

    <provide-inject-child />
  </div>
</template>

<script>
import ProvideInjectChild from "./Child/ProvideInjectChild.vue";
import { computed } from "vue";
export default {
  provide() {
    return {
      webname: computed(() => this.content),
      // webname: this.contentStr, //
      webnameObj: this.contentObj,
    };
    // return {  };
  },
  components: {
    ProvideInjectChild,
  },
  data() {
    return {
      contentObj: { str: "这是父组件的一个对象..." },
      content: "这是父组件的一个字符串...",
    };
  },
  computed: {
    // contentStr() {
    //   return this.content;
    // },
  },
};
</script>

<style lang="scss" scoped>
#div {
  border: 2px solid blue;
  //   display: ;
  padding: 10px 30px 30px 30px;
  header {
    width: 100%;
    text-align: start;
  }
  input {
    width: 200px;
  }
}
</style>
