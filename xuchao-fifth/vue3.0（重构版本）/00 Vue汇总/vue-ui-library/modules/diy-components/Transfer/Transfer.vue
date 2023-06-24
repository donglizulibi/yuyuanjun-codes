<template>
  <div>
    <div>
      <select @change="setTargetIndex($event.target.value)">
        <option v-for="(title, index) of options" :value="index">
          {{ title }}
        </option>
      </select>
    </div>
    <div class="transfer">
      <div class="box left-list">
        <h1>{{ leftTitle }}</h1>
      </div>
      <div class="box button-group"></div>
      <div class="box right-list"></div>
    </div>
  </div>
</template>

<script setup>
import propsDefination from "./extends/props";
import { useTargetIndex, useComputedData } from "./extends/hooks";

const props = defineProps(propsDefination);
const options = props.data.map((item) => item.title);

const [targetIndex, setTargetIndex] = useTargetIndex(0);
const { leftTitle } = useComputedData(props.data, targetIndex);
</script>

<style lang="scss" scoped></style>
