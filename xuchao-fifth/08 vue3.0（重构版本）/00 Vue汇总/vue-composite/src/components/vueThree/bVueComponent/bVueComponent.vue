<template>
  <div>
    <h3 v-on:click="aGlobalComponentShow">1）全局组件的注册方式</h3>
    <a-global-component v-if="aGlobalComponentState"></a-global-component>

    <h3 v-on:click="bBasePropsShow">2）props的基本用法</h3>
    <b-base-props v-if="bBasePropsState"></b-base-props>

    <h3 v-on:click="cButtonComponentShow">3）构建一个button组件</h3>
    <c-button-component v-if="cButtonComponentState"></c-button-component>
  </div>
</template>

<script>
import aGlobalComponent from "./aGlobalComponent/aGlobalComponent.vue";
import bBaseProps from "./bBaseProps/bBaseProps.vue";
import cButtonComponent from "./cButtonComponent/cButtonComponent.vue";
export default {
  components: {
    bBaseProps,
    aGlobalComponent,
    cButtonComponent,
  },
  data() {
    return {
      bBasePropsState: true,
      aGlobalComponentState: true,
      cButtonComponentState: true,
    };
  },
  methods: {
    aGlobalComponentShow() {
      this.aGlobalComponentState = !this.aGlobalComponentState;
    },
    bBasePropsShow() {
      this.bBasePropsState = !this.bBasePropsState;
    },
    cButtonComponentShow() {
      this.cButtonComponentState = !this.cButtonComponentState;
    },
  },
};
</script>

<style lang="scss" scoped></style>
