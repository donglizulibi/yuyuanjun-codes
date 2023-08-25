<template>
  <h5>直接在父组件的标签上写v-model（简化写法）</h5>
  <h5>此时子组件可以当作普通表单元素使用</h5>
  <a-vmodel-vue-three-child />

  <h5>标准写法及原理，需要在父组件标签上添加v-on:update:modelValue来绑定自定义事件</h5>
  <h5>以及v-bind:modelValue传递父组件的props值</h5>
  <b-vmodel-vue-three-child />

  <h6>注：简化写法和标准写法只在父组件的不同，子组件的写法一致</h6>
</template>

<script>
import aVmodelVueThreeChild from "./bVmodelVueThreeChild/aVmodelVueThreeChild.vue";
import bVmodelVueThreeChild from "./bVmodelVueThreeChild/bVmodelVueThreeChild.vue";
export default {
  components: {
    aVmodelVueThreeChild,
    bVmodelVueThreeChild,
  },
};
</script>

<style lang="scss" scoped></style>
