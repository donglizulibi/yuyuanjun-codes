<template>
  <div>
    <Table />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { tableData } from "../../data/table/table";
import Table from "../../modules/diy-components/Table/Table";
const data = ref(tableData);
</script>

<style lang="scss" scoped></style>
