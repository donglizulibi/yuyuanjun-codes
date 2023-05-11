<template>
  <ul>
    <li v-for="item in productStore.all" :key="item.id">
      {{ item.title }} - ${{ item.price }}
      <br />
      <button :disabled="!item.inventory" v-on:click="cartStore.addProduct(item)">
        添加到购物车
      </button>
    </li>
  </ul>
</template>

<script setup>
import { useProductStore } from "../store/productStore";
import { useCartStore } from "../store/cartStore";
const productStore = useProductStore();
const cartStore = useCartStore();

productStore.getAllProducts();

console.log(productStore.all);
</script>

<style lang="scss" scoped>
ul {
  li {
    list-style: none;
    margin-bottom: 10px;
    button {
      border: 1px solid black;
    }
  }
}
</style>
