<template>
  <div>
    <!-- <component :is="About"></component> -->
    <slot content="houdunren" status="hd" :Component="page" />
    <button v-on:click="check">切换页面</button>
  </div>
</template>

<script setup>
import About from "./About.vue";
import Home from "./Home.vue";
import { shallowRef, ref } from "vue";
const page = shallowRef(About);
const check = () => {
  if (page.value == About) {
    page.value = Home;
  } else {
    page.value = About;
  }
};
</script>

<style lang="scss" scoped></style>
