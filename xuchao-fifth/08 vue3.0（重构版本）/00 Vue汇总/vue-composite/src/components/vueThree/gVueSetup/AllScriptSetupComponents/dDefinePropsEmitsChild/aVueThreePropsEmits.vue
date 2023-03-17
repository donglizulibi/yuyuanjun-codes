<template>
  <div>
    父组件的区域：
    <br />{{ data }}
    <br />
    <button v-on:click="changeData">改变父组件的数据</button>
    <br />
    <br />
    <a-vue-three-props-emits-child :props-data="data"></a-vue-three-props-emits-child>
  </div>
</template>

<script setup>
import { ref } from "vue";
import aVueThreePropsEmitsChild from "./child/aVueThreePropsEmitsChild.vue";
let data = ref("父组件的数据");
let changeData = () => {
  if (data.value == "父组件的数据") {
    data.value = "父组件修改后的数据";
  } else {
    data.value = "父组件的数据";
  }
};
// export default {};
</script>

<style lang="scss" scoped></style>
