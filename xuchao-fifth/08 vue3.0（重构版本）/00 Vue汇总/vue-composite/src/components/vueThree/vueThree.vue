<script>
import aVueBase from "./aVueBase/aVueBase.vue";
import bVueComponent from "./bVueComponent/bVueComponent.vue";
import cVueSlotComponent from "./cVueSlot/cVueSlotComponent.vue";
import dVueProvideInjectComponent from "./dVueInject/dVueProvideInjectComponent.vue";
import eVueLifeCycleComponent from "./eVueLifecycle/eVueLifeCycleComponent.vue";
import fVueCompositionApi from "./fVueCompositionAPI/fVueCompositionApi.vue";

import db from "../../../data/compoentState";
import getComponentState from "../../../utls/getComponentState";
// for (const [key, value] in db) {
//   console.log(key, value);
// }

// console.log(getComponentState(db, "bBasePropsState"));
// console.log(db);
export default {
  components: {
    aVueBase,
    bVueComponent,
    cVueSlotComponent,
    dVueProvideInjectComponent,
    eVueLifeCycleComponent,
    fVueCompositionApi,
  },
  data() {
    return {
      baseState: getComponentState(db, "baseState"),
      bVueComponentState: getComponentState(db, "bVueComponentState"),
      cVueSlotComponentState: getComponentState(db, "cVueSlotComponentState"),
      dVueProvideInjectState: getComponentState(db, "dVueProvideInjectState"),
      eVueLifeCycleState: getComponentState(db, "eVueLifeCycleState"),
      fVueCompositionApiState: getComponentState(db, "fVueCompositionApiState"),
    };
  },
  methods: {
    baseShow() {
      this.baseState = !this.baseState;
    },

    bVueComponentShow() {
      this.bVueComponentState = !this.bVueComponentState;
    },

    cVueSlotComponentShow() {
      this.cVueSlotComponentState = !this.cVueSlotComponentState;
    },
    dVueProvideInjectShow() {
      this.dVueProvideInjectState = !this.dVueProvideInjectState;
    },

    eVueLifeCycleShow() {
      this.eVueLifeCycleState = !this.eVueLifeCycleState;
    },
    fVueCompositionApiShow() {
      this.fVueCompositionApiState = !this.fVueCompositionApiState;
    },
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>

<template>
  <div>
    <h2 v-on:click="baseShow">1.vue3基础</h2>
    <a-vue-base v-if="baseState"></a-vue-base>

    <h2 v-on:click="bVueComponentShow">2.vue3组件化开发</h2>
    <b-vue-component v-if="bVueComponentState"></b-vue-component>

    <h2 v-on:click="cVueSlotComponentShow">3.插槽slot</h2>
    <c-vue-slot-component v-if="cVueSlotComponentState"></c-vue-slot-component>

    <h2 v-on:click="dVueProvideInjectShow">4.provide-inject与动态组件</h2>
    <d-vue-provide-inject-component
      v-if="dVueProvideInjectState"
    ></d-vue-provide-inject-component>

    <h2 v-on:click="eVueLifeCycleShow">5.生命周期</h2>
    <e-vue-life-cycle-component v-if="eVueLifeCycleState"></e-vue-life-cycle-component>

    <h2 v-on:click="fVueCompositionApiShow">6. Composition Api基础</h2>
    <f-vue-composition-api v-if="fVueCompositionApiState"></f-vue-composition-api>
  </div>
</template>
