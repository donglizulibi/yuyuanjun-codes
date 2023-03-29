<template>
  <div>
    <h2>1.pinia的基本使用</h2>
    <a-pinia-base></a-pinia-base>

    <h2>2.action和getters的使用</h2>
    <b-action-getters></b-action-getters>

    <h2>3.购物车案例</h2>
    <c-shop-cart></c-shop-cart>
  </div>
</template>

<script setup>
import aPiniaBase from "./aPiniaBase/aPiniaBase.vue";
import bActionGetters from "./bActionGetters/bActionGetters.vue";
import cShopCart from "./cShopCart/cShopCart.vue";
</script>

<style lang="scss" scoped></style>
