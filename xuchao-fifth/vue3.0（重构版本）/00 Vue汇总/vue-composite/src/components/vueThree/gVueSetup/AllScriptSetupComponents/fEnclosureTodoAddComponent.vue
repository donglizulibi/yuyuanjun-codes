<template>
  <div>
    <div class="main">
      <f-enclosure-todo-component-child
        :todo="todo"
        class="item"
        v-for="todo in todos"
        :key="todo.id"
      ></f-enclosure-todo-component-child>
      <add />
    </div>
  </div>
</template>

<script setup>
import fEnclosureTodoComponentChild from "./fEnclosureTodoAddComponentChild/fEnclosureTodoComponentChild.vue";
import useTodo from "./fEnclosureTodoAddComponentChild/useTodo";
import add from "./fEnclosureTodoAddComponentChild/add.vue";
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
