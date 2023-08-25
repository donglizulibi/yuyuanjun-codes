<template>
  <div>
    子组件的区域: <br />{{ childData }}
    <br />
    <button v-on:click="change">子组件的按钮</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
const emit = defineEmits(["hd"]);
const childData = ref("这是子组件数据");
const change = () => {
  if (childData.value == "这是子组件数据") {
    childData.value = "在子组件中修改数据";
  } else {
    childData.value = "这是子组件数据";
  }
  emit("hd", childData.value);
};
</script>

<style lang="scss" scoped></style>
