<template>
  <div>
    这里是父组件
    <a-provide-inject-base-child></a-provide-inject-base-child>
  </div>
</template>

<script>
import aProvideInjectBaseChild from "./child/aProvideInjectBaseChild.vue";
export default {
  components: {
    aProvideInjectBaseChild,
  },
};
</script>

<style lang="scss" scoped></style>
