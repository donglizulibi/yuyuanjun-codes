<template>
  <div>
    <Pagination totalPagesData="12" v-model="current" />
    <br />
    <div>父组件区域</div>
    <p>{{ current }}</p>
  </div>
  <br />
</template>

<script setup>
import Pagination from "../../modules/diy-components/Pagination/Pagination";
import { ref } from "vue";
const current = ref(1);
</script>

<style lang="scss" scoped></style>
