<script setup>
import Pagination from "./components/Pagination/Pagination.vue";
const getPage = (e) => {
  console.log(e);
};
</script>

<template>
  <Pagination :totalPages="10" @current="getPage" />
</template>

<style scoped></style>
