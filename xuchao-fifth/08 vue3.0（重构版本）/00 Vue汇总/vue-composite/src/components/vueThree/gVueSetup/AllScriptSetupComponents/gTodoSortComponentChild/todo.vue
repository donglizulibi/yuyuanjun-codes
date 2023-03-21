<template>
  <div>
    <!-- {{ changeData.id }} -->
    <input ref="inputEle" type="text" :value="changeData.title" @input="changeInput" />

    <button v-on:click="del(changeData.id)">删除</button>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

import useTodo from "./useTodo";
const { del } = useTodo();

let emit = defineEmits(["hd"]);
let props = defineProps({
  todo: {
    type: Object,
  },
});

const changeData = ref(props.todo);
watch(props, (v) => {
  changeData.value = v.todo;
});
</script>

<style lang="scss" scoped>
div {
  display: flex;
  input {
    flex: 1;
    padding: 10px;
  }

  button {
    margin-left: 10px;
    font-size: 14px;
    font-weight: bold;
  }
}
</style>
