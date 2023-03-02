<template>
  <div>
    <h3>1）注册几个全局组件</h3>
    <a-global-component></a-global-component>

    <h3>2）三种方式实现动态组件</h3>
    <b-dynamic-component></b-dynamic-component>

    <h3>3）provide-inject依赖注入实现数据穿透</h3>
    <c-provide-inject></c-provide-inject>

    <h3>4）优化动态组件并使用keep-alive</h3>
    <d-dynamic-component-is-global></d-dynamic-component-is-global>

    <h3>5 使用this.$refs获取页面标签</h3>
    <e-ref></e-ref>
  </div>
</template>

<script>
import aGlobalComponent from "./AllProvideInjectComponents/aGlobalComponent.vue";
import bDynamicComponent from "./AllProvideInjectComponents/bDynamicComponent.vue";
import cProvideInject from "./AllProvideInjectComponents/cProvideInject.vue";
import dDynamicComponentIsGlobal from "./AllProvideInjectComponents/dDynamicComponentIsGlobal.vue";
import eRef from "./AllProvideInjectComponents/eRef.vue";
export default {
  components: {
    aGlobalComponent,
    bDynamicComponent,
    cProvideInject,
    dDynamicComponentIsGlobal,
    eRef,
  },
};
</script>

<style lang="scss" scoped></style>
