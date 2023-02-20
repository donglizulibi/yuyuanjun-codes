<script>
import aVueBase from "./aVueBase/aVueBase.vue";
import bVueComponent from "./bVueComponent/bVueComponent.vue";

import db from "../../../data/compoentState";
import getComponentState from "../../../utls/getComponentState";
// for (const [key, value] in db) {
//   console.log(key, value);
// }

// console.log(getComponentState(db, "bBasePropsState"));
// console.log(db);
export default {
  components: { aVueBase, bVueComponent },
  data() {
    return {
      baseState: getComponentState(db, "baseState"),
      bVueComponentState: getComponentState(db, "bVueComponentState"),
    };
  },
  methods: {
    baseShow() {
      this.baseState = !this.baseState;
    },

    bVueComponentShow() {
      this.bVueComponentState = !this.bVueComponentState;
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
  </div>
</template>
