<template>
  <div>
    <h6>规范v-model:modelValue（v-model:props名称）</h6>
    <vmodel-vue-three-child v-model:modelValue="title"></vmodel-vue-three-child>
    <br />
    <h6>如果props名称是modelValue，则可以省略</h6>
    <vmodel-vue-three-child v-model="title"></vmodel-vue-three-child>
    <div>父组件的区域：{{ title }}</div>
  </div>
  <br />
</template>

<script>
import VmodelVueThreeChild from "./VmodelVueThreeChild.vue";
export default {
  components: {
    VmodelVueThreeChild,
  },

  data() {
    return {
      title: "houdunren",
    };
  },
};
</script>

<style lang="scss" scoped></style>
