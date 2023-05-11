<template>
  <div>
    <div class="main">
      <button class="addDataFunc" v-on:click="addDataFunc">添加数据</button>
      <div class="add" v-if="addState">
        <input type="text" v-model="addData" />
        <br />
        <button class="checkAddData" v-on:click="checkAddData">确认添加</button>
      </div>
      <e-enclosure-request-data-child
        v-on:hd="updateData"
        :todo="todo"
        class="item"
        v-for="todo in todos"
        :key="todo.id"
      ></e-enclosure-request-data-child>
    </div>
    <h4>总结</h4>
    <h5>增加useRequest和useTodo两个文件，把发送请求和第一次加载数据的功能抽离出来</h5>
    <!-- <button v-on:click="checkDataBtn"></button> -->
    <br />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import useRequest from "./eEnclosureRequestDataChild/useRequest";
import eEnclosureRequestDataChild from "./eEnclosureRequestDataChild/eEnclosureRequestDataChild.vue";
import useTodo from "./eEnclosureRequestDataChild/useTodo";

// const todos = ref([]);
// // todos.value = request.getRequest().data;
// let resGet = await request.getRequest();

const { todos } = await useTodo();

// todos.value = resGet.data;
// axios({
//   method: "get",
//   url: "http://127.0.0.1:3003/news",
// }).then((val) => {
//   console.log(val);
//   todos.value = val.data;
// });

const request = useRequest();
const updateData = async () => {
  console.log(123);
  //   axios({
  //     method: "get",
  //     url: "http://127.0.0.1:3003/news",
  //   }).then((val) => {
  //     console.log(val);
  //     todos.value = val.data;
  //   });

  let resUpdata = await request.getRequest();
  console.log(resUpdata);
  todos.value = resUpdata.data;

  //   todos.value = request.getRequest().data;
};

const addData = ref("");
let addState = ref(false);
const addDataFunc = () => {
  addData.value = "";
  addState.value = true;
};
const checkAddData = async () => {
  console.log(addData);
  addState.value = false;

  if (addData.value) {
    // request.post({
    //   title: addData.value,
    // });
    // todos.value = request.getRequest().data;
    console.log(addData.value);
    await request.post(addData.value);
    let resUpdataPost = await request.getRequest();
    todos.value = resUpdataPost.data;

    // axios({
    //   method: "post",
    //   url: "http://127.0.0.1:3003/news",
    //   data: {
    //     title: addData.value,
    //   },
    // }).then(() => {
    //   axios({
    //     method: "get",
    //     url: "http://127.0.0.1:3003/news",
    //   }).then((val) => {
    //     console.log(val);
    //     todos.value = val.data;
    //   });
    // });
  }
};
</script>

<style lang="scss" scoped>
.main {
  width: 500px;
  height: 400px;
  //   border: 1px solid black;
  margin: auto;
  background-color: cadetblue;
  display: flex;
  flex-direction: column;
  padding: 20px;
  position: relative;
  .addDataFunc {
    width: 200px;
    margin-bottom: 20px;
  }
  .add {
    border: 1px black solid;
    width: 400px;
    height: 100px;
    background-color: aqua;
    position: absolute;
    left: 50px;
    top: 100px;
    input {
      width: 300px;
    }
    .checkAddData {
      margin-top: 10px;
    }
  }
  .item {
    margin-bottom: 10px;
  }
}
</style>
