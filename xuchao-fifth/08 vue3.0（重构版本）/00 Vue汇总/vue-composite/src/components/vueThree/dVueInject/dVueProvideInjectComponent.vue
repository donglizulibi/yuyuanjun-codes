<template>
  <div>
    <h3>1）全局组件的注册方式</h3>
    <a-global-component></a-global-component>

    <h3>2）三种方式实现动态组件</h3>
    <b-dynamic-component></b-dynamic-component>
  </div>
</template>

<script>
import aGlobalComponent from "./AllProvideInjectComponents/aGlobalComponent.vue";
import bDynamicComponent from "./AllProvideInjectComponents/bDynamicComponent.vue";
export default {
  components: {
    aGlobalComponent,
    bDynamicComponent,
  },
};
</script>

<style lang="scss" scoped></style>
