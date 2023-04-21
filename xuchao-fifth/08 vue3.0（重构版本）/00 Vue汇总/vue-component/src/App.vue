<script setup>
import Pagination from "./components/Pagination/Pagination.vue";
import { ref } from "vue";
const currentPage = ref(1);
const total = ref(10);
</script>

<template>
  <Pagination :totalPagesData="total" v-model="currentPage" />
</template>

<style scoped></style>
