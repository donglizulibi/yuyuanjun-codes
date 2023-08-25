<template>
  <div>
    <h4>setup中的计算属性computed</h4>
    <a-setup-computed-child></a-setup-computed-child>

    <h4>setup中的生命周期函数</h4>
    <b-setup-life-cycle-child></b-setup-life-cycle-child>
  </div>
</template>

<script>
import aSetupComputedChild from "./fSetupComputedLifeCycleChild/aSetupComputedChild.vue";
import bSetupLifeCycleChild from "./fSetupComputedLifeCycleChild/bSetupLifeCycleChild.vue";
export default {
  components: {
    aSetupComputedChild,
    bSetupLifeCycleChild,
  },
};
</script>

<style lang="scss" scoped></style>
