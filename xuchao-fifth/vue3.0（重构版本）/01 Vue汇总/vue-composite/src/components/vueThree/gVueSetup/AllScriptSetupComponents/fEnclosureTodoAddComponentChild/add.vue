<template>
  <div class="add">
    <input
      type="text"
      v-model="title"
      placeholder="回车提交任务"
      v-on:keyup.enter="onSubmit"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import useTodo from "./useTodo";

const title = ref("");
const onSubmit = () => {
  useTodo().add(title.value);
  title.value = "";
};
</script>

<style lang="scss" scoped>
div.add {
  display: flex;
  input {
    flex: 1;
    padding: 10px;
    border: solid 3px blueviolet;
  }
}
</style>
