<template>
  <div>
    <Transfer :data="data" right-title="已选择机型" />
    <Magnifier />
  </div>
</template>

<script setup>
import { transferData as data } from "../../data/transfer/transfer";
</script>

<style lang="scss" scoped></style>
