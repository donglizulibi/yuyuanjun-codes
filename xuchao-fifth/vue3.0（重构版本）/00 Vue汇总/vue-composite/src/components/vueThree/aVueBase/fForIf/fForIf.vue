<template>
  <div>
    <h5>升序降序排列</h5>
    <v-for-demo></v-for-demo>

    <h5>v-if和v-else-if的使用（根据课程信息控制背景颜色）</h5>
    <v-if-component></v-if-component>
    <h5>
      在vue2中
      <br />
      v-for优先级高于v-if
      <br />
      但是同时使用一般不会报错，不过会浪费性能
      <br />
      官方建议在computed里面先把数据过滤一遍再遍历
      <br />
      <br />
      在vue3中
      <br />
      v-if优先级高于v-for，同时使用会报错
      <br />
      改进方法把v-for遍历放在外层的template标签里，在内部使用v-if判断
    </h5>
  </div>
</template>

<script>
import VForDemo from "./fForIf/VForDemo.vue";
import VIfComponent from "./fForIf/VIfComponent.vue";
export default {
  components: {
    VForDemo,
    VIfComponent,
  },
};
</script>

<style lang="scss" scoped></style>
