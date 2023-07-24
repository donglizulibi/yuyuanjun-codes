<script setup>
import useTransfer from "./use-components/useTransfer";
import useMagnifier from "./use-components/useMagnifier.vue";
import useTable from "./use-components/useTable.vue";
</script>
<template>
  <h3>Transfer 穿梭框</h3>
  <use-transfer></use-transfer>

  <h3>Magnifier 放大镜</h3>
  <use-magnifier></use-magnifier>

  <h3>可编辑表格</h3>
  <use-table></use-table>
</template>

<style scoped></style>
