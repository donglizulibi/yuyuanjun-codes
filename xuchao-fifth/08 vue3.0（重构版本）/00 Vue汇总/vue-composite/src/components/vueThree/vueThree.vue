<script>
import aVueBase from "./aVueBase/aVueBase.vue";
import bVueComponent from "./bVueComponent/bVueComponent.vue";
export default {
  components: { aVueBase, bVueComponent },
  data() {
    return {
      baseState: false,
      bVueComponentState: true,
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
