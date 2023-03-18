<template>
  <div>
    <input ref="inputEle" type="text" :value="changeData" @input="changeInput" />

    <button v-on:click="del">删除</button>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import deleteRequest from "./useRequest";
import useRequest from "./useRequest";
const request = useRequest();
let emit = defineEmits(["hd"]);
let props = defineProps({
  todo: {
    type: String,
  },
});
const changeData = ref(props.todo.title);
watch(props, (v) => {
  changeData.value = v.todo.title;
});

const del = async () => {
  await request.deleteRequest(props.todo.id);
  emit("hd");
};
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
  }
}
</style>
