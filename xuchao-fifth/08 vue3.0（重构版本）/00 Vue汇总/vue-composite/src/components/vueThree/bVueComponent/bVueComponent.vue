<template>
  <div>
    <h3 v-on:click="aGlobalComponentShow">1）全局组件的注册方式</h3>
    <a-global-component v-if="aGlobalComponentState"></a-global-component>

    <h3 v-on:click="bBasePropsShow">2）props的基本用法</h3>
    <b-base-props v-if="bBasePropsState"></b-base-props>

    <h3 v-on:click="cButtonComponentShow">3）构建一个button组件</h3>
    <c-button-component v-if="cButtonComponentState"></c-button-component>

    <h3 v-on:click="dEventComponentShow">4）emit自定义事件</h3>
    <d-event-component v-if="dEventCompoentState"></d-event-component>

    <h3 v-on:click="eVmodelComponentShow">5）v-model双向绑定</h3>
    <e-vmodel-component v-if="eVmodelComponentState"></e-vmodel-component>
  </div>
</template>

<script>
import aGlobalComponent from "./aGlobalComponent/aGlobalComponent.vue";
import bBaseProps from "./bBaseProps/bBaseProps.vue";
import cButtonComponent from "./cButtonComponent/cButtonComponent.vue";
import dEventComponent from "./dEventComponent/dEventComponent.vue";
import db from "../../../../data/compoentState";
import getComponentState from "../../../../utls/getComponentState";
import eVmodelComponent from "./eVmodelComponent/eVmodelComponent.vue";
export default {
  components: {
    bBaseProps,
    aGlobalComponent,
    cButtonComponent,
    dEventComponent,
    eVmodelComponent,
  },
  data() {
    return {
      bBasePropsState: getComponentState(db, "bBasePropsState"),
      aGlobalComponentState: getComponentState(db, "aGlobalComponentState"),
      cButtonComponentState: getComponentState(db, "cButtonComponentState"),
      dEventCompoentState: getComponentState(db, "dEventCompoentState"),
      eVmodelComponentState: getComponentState(db, "eVmodelComponentState"),
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
    eVmodelComponentShow() {
      this.eVmodelComponentState = !this.eVmodelComponentState;
    },
  },
};
</script>

<style lang="scss" scoped></style>
