<template>
  <div>
    父组件区域：<br />{{ dataContent }}
    <br />
    <br />
    <b-define-emits-child v-on:hd="getData"></b-define-emits-child>
  </div>
</template>

<script setup>
import { ref } from "vue";
import bDefineEmitsChild from "./child/bDefineEmitsChild.vue";
const dataContent = ref("");
const getData = (e) => {
  dataContent.value = e;
  console.log(e);
};
</script>

<style lang="scss" scoped></style>
