<template>
  <!-- v-model的实现原理 -->
  <vmodel-vue-three-child :hd="title" @update:modelValue="show"></vmodel-vue-three-child>

  <!-- v-model的标准写法 -->
  <!-- <vmodel-vue-three-child v-model:modelValue="title" /> -->

  <!-- v-model的简写 -->
  <!-- <vmodel-vue-three-child v-model="title" /> -->
  <div>父组件的区域：{{ title }}</div>
</template>

<script>
import VmodelVueThreeChild from "./Child/VmodelVueThreeChild.vue";
export default {
  components: { VmodelVueThreeChild },
  data() {
    return { title: "houdunren" };
  },
  methods: {
    show(event) {
      console.log(event);
      this.title = event;
    },
  },
};
</script>

<style lang="scss" scoped></style>
