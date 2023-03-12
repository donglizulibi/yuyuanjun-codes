<template>
  <div>
    <h3>1）组合api的基本使用</h3>
    <a-composition-api-base></a-composition-api-base>

    <h3>2）使用watch和watchEffect在setup中监听数据</h3>
    <b-setup-watch-effect></b-setup-watch-effect>

    <h3>3）setup中的props和自定义事件调用</h3>
    <c-setup-props-emits></c-setup-props-emits>

    <h3>4）父组件操作子组件数据与expose限定</h3>
    <d-ref-expose></d-ref-expose>

    <h3>5）expose中的slots和attrs处理</h3>
    <e-expose-slots-attrs></e-expose-slots-attrs>

    <h3>6）setup中使用computed计算属性和生命周期</h3>
    <f-setup-computed-life-cycle></f-setup-computed-life-cycle>

    <h3>7）setup中使用provide-inject依赖注入</h3>
    <g-setup-provide-inject></g-setup-provide-inject>
  </div>
</template>

<script>
import aCompositionApiBase from "./AllVueCompositionApi/aCompositionApiBase.vue";
import bSetupWatchEffect from "./AllVueCompositionApi/bSetupWatchEffect.vue";
import cSetupPropsEmits from "./AllVueCompositionApi/cSetupPropsEmits.vue";
import dRefExpose from "./AllVueCompositionApi/dRefExpose.vue";
import eExposeSlotsAttrs from "./AllVueCompositionApi/eExposeSlotsAttrs.vue";
import fSetupComputedLifeCycle from "./AllVueCompositionApi/fSetupComputedLifeCycle.vue";
import gSetupProvideInject from "./AllVueCompositionApi/gSetupProvideInject.vue";
export default {
  components: {
    aCompositionApiBase,
    bSetupWatchEffect,
    cSetupPropsEmits,
    dRefExpose,
    eExposeSlotsAttrs,
    fSetupComputedLifeCycle,
    gSetupProvideInject,
  },
};
</script>

<style lang="scss" scoped></style>
