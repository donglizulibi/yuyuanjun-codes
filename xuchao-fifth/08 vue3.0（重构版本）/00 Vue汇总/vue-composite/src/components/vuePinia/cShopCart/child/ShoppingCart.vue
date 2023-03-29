<template>
  <div class="cart">
    <h3>你的购物车</h3>
    <p>
      <i>请添加一些商品到购物车</i>
    </p>
    <ul>
      <li v-for="item in cartStore.cartProducts" :key="item.id">
        {{ item.title }} - ${{ item.price }} × {{ item.quantity }}
      </li>
    </ul>
    <p>商品总价：×××</p>
    <p>
      <button>结算</button>
    </p>
    <p>结算成功 / 失败.</p>
  </div>
</template>

<script setup>
import { useCartStore } from "../store/cartStore";
const cartStore = useCartStore();
</script>

<style lang="scss" scoped>
.cart {
  ul {
    li {
      list-style: none;
    }
  }
}
</style>
