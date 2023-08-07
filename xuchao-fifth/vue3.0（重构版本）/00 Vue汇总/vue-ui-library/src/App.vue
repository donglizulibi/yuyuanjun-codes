<script setup>
import useTransfer from "./use-components/useTransfer";
import useMagnifier from "./use-components/useMagnifier.vue";
import useTable from "./use-components/useTable.vue";
import useProvCityZone from "./use-components/useProvCityZone.vue";
import usePagination from "./use-components/usePagination.vue";
import useTableCopy from "./use-components/useTableCopy.vue";
</script>
<template>
  <h3>Transfer 穿梭框</h3>
  <use-transfer></use-transfer>

  <h3>Magnifier 放大镜</h3>
  <use-magnifier></use-magnifier>

  <h3>EditTable 可编辑表格</h3>
  <use-table-copy></use-table-copy>
  <!-- <use-table></use-table> -->

  <h3>ProvCityZone 省市区联动</h3>
  <use-prov-city-zone></use-prov-city-zone>

  <h3>Pagination 分页栏</h3>
  <use-pagination></use-pagination>
</template>

<style scoped></style>
