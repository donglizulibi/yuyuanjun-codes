<template>
  <div>
    <div class="main">
      <button class="addDataFunc" v-on:click="addDataFunc">添加数据</button>
      <div class="add" v-if="addState">
        <input type="text" v-model="addData" />
        <br />
        <button class="checkAddData" v-on:click="checkAddData">确认添加</button>
      </div>

      <f-enclosure-todo-add-component-child
        v-on:hd="updateData"
        :todo="todo"
        class="item"
        v-for="todo in todos"
        :key="todo.id"
      ></f-enclosure-todo-add-component-child>
    </div>
  </div>
</template>

<script setup>
import fEnclosureTodoAddComponentChild from "./fEnclosureTodoAddComponentChild/fEnclosureTodoAddComponentChild.vue";
import useTodo from "./fEnclosureTodoAddComponentChild/useTodo";

const todos = await useTodo();
console.log(todos.value);
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
