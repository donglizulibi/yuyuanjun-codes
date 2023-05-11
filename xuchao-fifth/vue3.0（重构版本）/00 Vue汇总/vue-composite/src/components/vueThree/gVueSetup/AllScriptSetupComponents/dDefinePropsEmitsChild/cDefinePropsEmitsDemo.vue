<template>
  <div>
    <div class="main">
      <button class="addDataFunc" v-on:click="addDataFunc">添加数据</button>
      <div class="add" v-if="addState">
        <input type="text" v-model="addData" />
        <br />
        <button class="checkAddData" v-on:click="checkAddData">确认添加</button>
      </div>
      <c-define-props-emits-demo-child
        v-on:hd="updateData"
        :todo="todo"
        class="item"
        v-for="todo in todos"
        :key="todo.id"
      ></c-define-props-emits-demo-child>
    </div>
    <!-- <button v-on:click="checkDataBtn"></button> -->
    <br />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import cDefinePropsEmitsDemoChild from "./child/cDefinePropsEmitsDemoChild.vue";
const todos = ref([]);
axios({
  method: "get",
  url: "http://127.0.0.1:3003/news",
}).then((val) => {
  console.log(val);
  todos.value = val.data;
});

const updateData = () => {
  console.log(123);
  axios({
    method: "get",
    url: "http://127.0.0.1:3003/news",
  }).then((val) => {
    console.log(val);
    todos.value = val.data;
  });
};

// const checkDataBtn = () => {
//   axios({
//     method: "get",
//     url: "http://127.0.0.1:3003/news",
//   }).then((val) => {
//     console.log(val);
//     todos.value = val.data;
//   });
// };

const addData = ref("");
let addState = ref(false);
const addDataFunc = () => {
  addData.value = "";
  addState.value = true;
};
const checkAddData = () => {
  console.log(addData);
  addState.value = false;

  if (addData.value) {
    axios({
      method: "post",
      url: "http://127.0.0.1:3003/news",
      data: {
        title: addData.value,
      },
    }).then(() => {
      axios({
        method: "get",
        url: "http://127.0.0.1:3003/news",
      }).then((val) => {
        console.log(val);
        todos.value = val.data;
      });
    });
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
h5 {
  text-align: left;
  width: 600px;
  margin: auto;
}
</style>
