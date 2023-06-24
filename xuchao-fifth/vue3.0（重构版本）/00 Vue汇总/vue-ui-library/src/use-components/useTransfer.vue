<template>
  <div>
    <transfer :data="data" right-title="已选择机型"></transfer>
  </div>
</template>

<script setup>
import { transferData as data } from "../../data/transfer/transfer";
import { Transfer } from "../../modules/diy-components/index";
</script>

<style lang="scss" scoped></style>
