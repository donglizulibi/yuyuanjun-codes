<template>
  <h3>商品列表</h3>
  <ProductList />
  <div class="line"></div>
  <ShoppingCart />
</template>

<script setup>
import ProductList from "./child/ProductList.vue";
import ShoppingCart from "./child/ShoppingCart.vue";
</script>

<style lang="scss" scoped>
.line {
  width: 300px;
  height: 1px;
  background-color: black;
  margin: auto;
}
</style>
