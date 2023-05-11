<template>
  <div>
    子组件的区域：
    <br />{{ propsDataMid }}
    <br />
    <button v-on:click="childChange">子组件的按钮</button>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
let props = defineProps({
  propsData: {
    type: String,
  },
});
let propsDataMid = ref(props.propsData);

let childChange = () => {
  if (propsDataMid.value == "子组件修改后的数据") {
    propsDataMid.value = "子组件修改数据会影响父组件吗";
  } else {
    propsDataMid.value = "子组件修改后的数据";
  }
};

watch(props, (v) => {
  propsDataMid.value = v.propsData;
});
</script>

<style lang="scss" scoped></style>
