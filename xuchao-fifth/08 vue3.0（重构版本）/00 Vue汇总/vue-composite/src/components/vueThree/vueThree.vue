<script>
import aVueBase from "./aVueBase/aVueBase.vue";
import bVueComponent from "./bVueComponent/bVueComponent.vue";
import cVueSlotComponent from "./cVueSlot/cVueSlotComponent.vue";

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
  },
  data() {
    return {
      baseState: getComponentState(db, "baseState"),
      bVueComponentState: getComponentState(db, "bVueComponentState"),
      cVueSlotComponentState: getComponentState(db, "cVueSlotComponentState"),
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
  </div>
</template>
