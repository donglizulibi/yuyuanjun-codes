<script>
import vuePinia from "./components/vuePinia/vuePinia.vue";
import vueThree from "./components/vueThree/vueThree.vue";
import db from "../data/compoentState";
import getComponentState from "../utls/getComponentState";
import { provide, ref } from "vue";
export default {
  setup() {
    let user = ref("根组件的数据");
    setTimeout(() => {
      user.value = "在根组件的定时器中修改后的数据";
    }, 1000);
    provide("user", user);
    provide("updataUser", (newValue) => {
      user.value = newValue;
    });
  },
  components: {
    vuePinia,
    vueThree,
  },
  data() {
    return {
      threeState: getComponentState(db, "threeState"),
      piniaState: getComponentState(db, "piniaState"),
    };
  },
  methods: {
    threeShow() {
      this.threeState = !this.threeState;
    },
    piniaShow() {
      this.piniaState = !this.piniaState;
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
  </div>
</template>

<style scoped></style>
