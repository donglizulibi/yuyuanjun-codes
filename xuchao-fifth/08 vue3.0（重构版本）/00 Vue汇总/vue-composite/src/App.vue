<script>
import vuePinia from "./components/vuePinia/vuePinia.vue";
import vueRouter from "./components/vueRouter/vueRouter.vue";
import vueThree from "./components/vueThree/vueThree.vue";
import db from "../data/compoentState";
import getComponentState from "../utls/getComponentState";
export default {
  components: {
    vuePinia,
    vueRouter,
    vueThree,
  },
  data() {
    return {
      threeState: getComponentState(db, "threeState"),
      piniaState: getComponentState(db, "piniaState"),
      routerState: getComponentState(db, "routerState"),
    };
  },
  methods: {
    threeShow() {
      this.threeState = !this.threeState;
    },
    piniaShow() {
      this.piniaState = !this.piniaState;
    },
    routerShow() {
      this.routerState = !this.routerState;
    },
  },
};
</script>

<template>
  <div>
    <h1 v-on:click="threeShow">一、Vue3</h1>
    <vue-three v-if="threeState"></vue-three>

    <h1 v-on:click="piniaShow">二、VuePinia</h1>
    <vue-pinia v-if="piniaState"></vue-pinia>

    <h1 v-on:click="routerShow">三、VueRouter</h1>
    <vue-router v-if="routerState"></vue-router>
  </div>
</template>

<style scoped></style>
