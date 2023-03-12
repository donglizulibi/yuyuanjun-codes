<template>
  <div>
    <h4>setup中依赖注入的基本使用</h4>
    <a-provide-inject-base></a-provide-inject-base>
  </div>
</template>

<script>
import aProvideInjectBase from "./gSetupProvideInjectChild/aProvideInjectBase.vue";
export default {
  components: {
    aProvideInjectBase,
  },
};
</script>

<style lang="scss" scoped></style>
