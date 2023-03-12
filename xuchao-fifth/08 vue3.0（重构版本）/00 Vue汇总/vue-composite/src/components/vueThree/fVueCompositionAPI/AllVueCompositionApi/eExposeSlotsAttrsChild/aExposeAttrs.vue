<template>
  <div>
    <h5>在子组件模板中直接显示父组件的$attrs</h5>
    <a-expose-attrs-child-one style="color: red"></a-expose-attrs-child-one>

    <h5>调用expose中的attrs</h5>
    <a-expose-attrs-child-two></a-expose-attrs-child-two>
  </div>
</template>

<script>
import aExposeAttrsChildOne from "./child/aExposeAttrsChildOne.vue";
import aExposeAttrsChildTwo from "./child/aExposeAttrsChild.vue";
export default {
  components: {
    aExposeAttrsChildOne,
    aExposeAttrsChildTwo,
  },
};
</script>

<style lang="scss" scoped></style>
