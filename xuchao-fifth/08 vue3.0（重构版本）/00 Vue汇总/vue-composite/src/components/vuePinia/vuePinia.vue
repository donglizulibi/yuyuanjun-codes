<template>
  <div>
    <h2 @click="piniaBaseShow">1.pinia的基本使用</h2>
    <a-pinia-base v-if="piniaBaseState"></a-pinia-base>

    <h2 @click="actionGettersShow">2.action和getters的使用</h2>
    <b-action-getters v-if="actionGettersState"></b-action-getters>

    <h2 @click="showCartShow">3.购物车案例</h2>
    <c-shop-cart v-if="showCartState"></c-shop-cart>
  </div>
</template>

<script setup>
import aPiniaBase from "./aPiniaBase/aPiniaBase.vue";
import bActionGetters from "./bActionGetters/bActionGetters.vue";
import cShopCart from "./cShopCart/cShopCart.vue";
import getComponentState from "../../../utls/getComponentState";
import componentState from "../../../data/compoentState";
import { ref } from "vue";

const piniaBaseState = ref(getComponentState(componentState, "piniaBaseState"));
const piniaBaseShow = () => {
  piniaBaseState.value = !piniaBaseState.value;
};

const actionGettersState = ref(getComponentState(componentState, "actionGettersState"));
const actionGettersShow = () => {
  actionGettersState.value = !actionGettersState.value;
};

const showCartState = ref(getComponentState(componentState, "showCartState"));
const showCartShow = () => {
  showCartState.value = !showCartState.value;
};
</script>

<style lang="scss" scoped></style>
