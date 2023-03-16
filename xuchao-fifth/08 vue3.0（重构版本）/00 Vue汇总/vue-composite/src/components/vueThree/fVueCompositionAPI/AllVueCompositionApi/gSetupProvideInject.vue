<template>
  <div>
    <p>这里是父组件</p>
    <a-provide-inject-base-child></a-provide-inject-base-child>
    <h4>总结</h4>
    <h5>1 本例虽然设置了父-子-孙三层组件，但是无法实现依赖注入的传值</h5>
    <h5>
      2 只能在根组件App中设置依赖才能实现，根组件需要引入provide方法，孙组件引入inject方法
    </h5>
    <h5>
      3
      在根组件中可以设置另一个依赖，传递一个回调函数到孙组件中，孙组件可以绑定这个回调函数在孙组件内部修改数据
    </h5>
    <br />
  </div>
</template>

<script>
import aProvideInjectBaseChild from "./gSetupProvideInjectChild/child/aProvideInjectBaseChild.vue";
import { provide, ref } from "vue";
export default {
  components: {
    aProvideInjectBaseChild,
    setup() {
      let data = ref("这里是父组件的数据");
      provide("user", data);
    },
  },
};
</script>

<style lang="scss" scoped>
p {
  margin: auto;
  width: 200px;
  border: 1px solid black;
  padding: 10px;
  margin-bottom: 10px;
}
</style>
