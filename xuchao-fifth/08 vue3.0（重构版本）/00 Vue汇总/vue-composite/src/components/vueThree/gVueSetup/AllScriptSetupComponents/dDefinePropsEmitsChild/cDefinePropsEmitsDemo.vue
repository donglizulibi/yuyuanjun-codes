<template>
  <div>
    <div class="main">
      <c-define-props-emits-demo-child
        :todo="todo"
        class="item"
        v-for="todo in todos"
        :key="todo.id"
      ></c-define-props-emits-demo-child>
    </div>

    <h4>总结</h4>
    <!-- <h5>
      1
      使用传统的props需要把数据在data中存一下，然后用watch监测props的变化以即时更新data<br />
      &nbsp;&nbsp;&nbsp;但是defineProps的数据可以直接在页面使用
    </h5> -->
    <h5></h5>
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
