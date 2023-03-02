<template>
  <div class="main">
    <h4>is方法</h4>
    <dynamic-component-is></dynamic-component-is>
    <br />

    <h4>style方法</h4>
    <dynamic-component-style></dynamic-component-style>
    <br />

    <h4>v-if方法</h4>
    <dynamic-component-vif></dynamic-component-vif>
    <br />
  </div>
</template>

<script>
import DynamicComponentIs from "./bDynamicComponentChild/DynamicComponentIs.vue";
import DynamicComponentStyle from "./bDynamicComponentChild/DynamicComponentStyle.vue";
import DynamicComponentVif from "./bDynamicComponentChild/DynamicComponentVif.vue";

export default {
  components: {
    DynamicComponentIs,
    DynamicComponentStyle,
    DynamicComponentVif,
  },
};
</script>

<style lang="scss" scoped>
.main {
  width: 500px;
  margin: auto;
}
</style>
