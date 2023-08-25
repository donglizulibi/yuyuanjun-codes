<template>
  <div>
    <prov-city-zone :data="dataArr" @position="getPosition"></prov-city-zone>
  </div>
  <div>
    <p>父组件区域</p>
    <p v-if="param">{{ param.prov }} - {{ param.city }} - {{ param.zone }}</p>
  </div>
  <br />
  <br />
</template>

<script setup>
import { ref } from "vue";
import ProvCityZone from "../../modules/diy-components/ProvCityZone/ProvCityZone";
import data from "../../data/prov-city-zone/prov-city-zone-demo";
const dataArr = ref(data.dataArr);
let param = ref(undefined);
const getPosition = (pos) => {
  console.log(pos);
  param.value = pos;
};
</script>

<style lang="scss" scoped></style>
