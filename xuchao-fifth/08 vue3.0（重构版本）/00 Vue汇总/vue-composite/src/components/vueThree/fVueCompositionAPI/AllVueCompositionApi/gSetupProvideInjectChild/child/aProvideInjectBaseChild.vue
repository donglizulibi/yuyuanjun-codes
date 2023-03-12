<template>
  <div>
    这里是子组件
    <a-provide-inject-base-grandchild></a-provide-inject-base-grandchild>
  </div>
</template>

<script>
import aProvideInjectBaseGrandchild from "../grandchild/aProvideInjectBaseGrandchild.vue";
export default {
  components: {
    aProvideInjectBaseGrandchild,
  },
};
</script>

<style lang="scss" scoped></style>
