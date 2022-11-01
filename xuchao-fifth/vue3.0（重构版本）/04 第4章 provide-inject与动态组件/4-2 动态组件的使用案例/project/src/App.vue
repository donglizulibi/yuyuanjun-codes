<script>
import DynamicComponentStyle from "./components/DynamicComponentStyle.vue";
import DynamicComponentVif from "./components/DynamicComponentVif.vue";
import DynamicComponentIs from "./components/DynamicComponentIs.vue";
import DynamicComponentIsGlobal from "./components/DynamicComponentIsGlobal.vue";
import ProvideInject from "./components/ProvideInject.vue";
export default {
  components: {
    DynamicComponentStyle,
    DynamicComponentVif,
    DynamicComponentIs,
    DynamicComponentIsGlobal,
    ProvideInject,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<template>
  <h3>动态组件的使用案例: style方法</h3>
  <!-- <dynamic-component-style /> -->
  <hr />
  <h3>动态组件的使用案例: v-if方法</h3>
  <!-- <dynamic-component-vif /> -->
  <hr />
  <h3>动态组件的使用案例: is方法</h3>
  <!-- <dynamic-component-is /> -->
  <hr />

  <h3>provide与inject的数据穿透</h3>
  <provide-inject />
  <hr />

  <h3>全局组件注册和样式优化</h3>
  <h3>provide-inject配置管理</h3>
  <dynamic-component-is-global />
  <hr />
</template>

<style lang="scss" scoped></style>
