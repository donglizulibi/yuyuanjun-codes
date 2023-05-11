<template>
  <div>
    <button v-on:click="sort">{{ orderby == "desc" ? "降序" : "升序" }}</button>
  </div>
</template>

<script setup>
import useTodo from "./useTodo";
let { sort, orderby } = useTodo();
</script>

<style lang="scss" scoped>
div {
  display: flex;
  button {
    flex: 1;
    margin-left: 10px;
    font-size: 14px;
    background-color: blueviolet;
    color: aliceblue;
    font-weight: bold;
  }
}
</style>
