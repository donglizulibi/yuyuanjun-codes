<template>
  <div>
    <h3 v-on:click="aGlobalComponentShow">1）全局组件的注册方式</h3>
    <a-global-component v-if="aGlobalComponentState"></a-global-component>

    <h3 v-on:click="bBasePropsShow">2）props的基本用法</h3>
    <b-base-props v-if="bBasePropsState"></b-base-props>

    <h3 v-on:click="cButtonComponentShow">3）构建一个button组件</h3>
    <c-button-component v-if="cButtonComponentState"></c-button-component>

    <h3 v-on:click="dEventComponentShow">4）event事件及v-model双向绑定</h3>
    <d-event-component v-if="dEventCompoentState"></d-event-component>
  </div>
</template>

<script>
import aGlobalComponent from "./aGlobalComponent/aGlobalComponent.vue";
import bBaseProps from "./bBaseProps/bBaseProps.vue";
import cButtonComponent from "./cButtonComponent/cButtonComponent.vue";
import dEventComponent from "./dEventComponent/dEventComponent.vue";
export default {
  components: {
    bBaseProps,
    aGlobalComponent,
    cButtonComponent,
    dEventComponent,
  },
  data() {
    return {
      bBasePropsState: false,
      aGlobalComponentState: false,
      cButtonComponentState: false,
      dEventCompoentState: true,
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
    dEventComponentShow() {
      this.dEventCompoentState = !this.dEventCompoentState;
    },
  },
};
</script>

<style lang="scss" scoped></style>
