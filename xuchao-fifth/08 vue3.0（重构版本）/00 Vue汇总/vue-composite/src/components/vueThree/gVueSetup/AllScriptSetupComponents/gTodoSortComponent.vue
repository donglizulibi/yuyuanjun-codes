<template>
  <div>
    <div class="main">
      <todo :todo="todo" class="item" v-for="todo in todos" :key="todo.id"></todo>
      <add />
    </div>
  </div>
</template>

<script setup>
import todo from "./gTodoSortComponentChild/todo.vue";
import useTodo from "./gTodoSortComponentChild/useTodo";
import add from "./gTodoSortComponentChild/add.vue";
const { todos, load } = useTodo();
load();
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

  .item {
    margin-bottom: 10px;
  }
}
</style>
