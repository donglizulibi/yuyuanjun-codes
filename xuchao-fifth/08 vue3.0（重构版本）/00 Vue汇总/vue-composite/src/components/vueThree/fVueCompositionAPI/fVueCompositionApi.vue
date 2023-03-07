<template>
  <div>
    <h3>1）组合api的基本使用</h3>
    <a-composition-api-base></a-composition-api-base>

    <h3>2）使用watch和watchEffect在setup中监听数据</h3>
    <b-setup-watch-effect></b-setup-watch-effect>

    <h3>3）setup中的props和自定义事件调用</h3>
    <c-setup-props-emits></c-setup-props-emits>
  </div>
</template>

<script>
import aCompositionApiBase from "./AllVueCompositionApi/aCompositionApiBase.vue";
import bSetupWatchEffect from "./AllVueCompositionApi/bSetupWatchEffect.vue";
import cSetupPropsEmits from "./AllVueCompositionApi/cSetupPropsEmits.vue";
export default {
  components: {
    aCompositionApiBase,
    bSetupWatchEffect,
    cSetupPropsEmits,
  },
};
</script>

<style lang="scss" scoped></style>
