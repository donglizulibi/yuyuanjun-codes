<template>
  <div>
    <input ref="inputEle" type="text" :value="changeData" @input="changeInput" />
    <button v-on:click="change">修改</button>
    <button v-on:click="del">删除</button>
  </div>
</template>

<script setup>
import useRequest from "./useRequest";
import axios from "axios";
import { ref, watch } from "vue";
// console.log(request());

let request = useRequest();
console.log(request);

let props = defineProps({
  todo: {
    type: Object,
    required: true,
  },
});
let inputEle = ref();
let emit = defineEmits(["hd"]);
let changeData = ref(props.todo.title);
watch(props, (v) => {
  changeData.value = v.todo.title;
});
let sendData = ref("");
let changeInput = (e) => {
  sendData.value = e.target.value;
};
const change = () => {
  // console.log(sendData.value);
  if (!sendData.value) {
    alert("您没有修改任何内容");
  } else {
    const state = confirm("确认修改吗");
    console.log(state);

    if (state) {
      request.put(props.todo.id, sendData.value);

      //   axios({
      //     method: "PUT",
      //     url: `http://127.0.0.1:3003/news/${props.todo.id}`,
      //     data: {
      //       title: sendData.value,
      //     },
      //   }).then((val) => {

      //   })

      //   console.log(val);
      alert("已修改成功");
      sendData.value = "";
      emit("hd");
    } else {
      inputEle.value.value = changeData.value;
    }
  }
};

const del = async () => {
  console.log(props.todo.id);
  await request.delete(props.todo.id);

  //   axios({
  //     method: "delete",
  //     url: `http://127.0.0.1:3003/news/${props.todo.id}`,
  //   }).then((val) => {
  //     console.log(val);
  //   });

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
