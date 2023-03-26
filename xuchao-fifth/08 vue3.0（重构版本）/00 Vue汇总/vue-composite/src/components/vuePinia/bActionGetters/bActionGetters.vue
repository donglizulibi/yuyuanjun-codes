<template>
  <div>
    <h4>state实例中的属性</h4>
    {{ str }}
    <h4>使用$patch批量修改state中的数据</h4>
    <button v-on:click="change">修改</button>
  </div>
</template>

<script setup>
import useMainStore from "../../../store/index";
import { storeToRefs } from "pinia";
import { ref } from "vue";

const mianStore = useMainStore();

const str = ref(
  Object.keys(mianStore)
    .map((item, index) => index + 1 + "." + item)
    .join(` `)
);

const change = () => {
  // mianStore.$patch
};
</script>

<style lang="scss" scoped></style>
