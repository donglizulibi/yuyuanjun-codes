<template>
  <div>
    <h4>1 使用script-setup的区别</h4>
    <h5>Ⅰ 在script标签中加上setup即可进入script-setup模式</h5>
    <h5>Ⅱ 在script标签中引入模块后可以直接写代码，不用再写export default{ }</h5>
    <h5>Ⅲ 所有变量不用返回即可直接使用</h5>
    <h4>2 在onMounted中发送请求并显示在页面上</h4>
    <div v-for="item in arr" :key="item.id">
      {{ item.title }}
    </div>
    <br />
  </div>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
const arr = ref([{ id: 0, title: "初始数据" }]);
onMounted(() => {
  axios({
    method: "get",
    url: "http://127.0.0.1:3003/news",
  }).then((val) => {
    console.log(val.data);
    arr.value.push(...val.data);
  });

  console.log(arr.value);
});
</script>

<style lang="scss" scoped></style>
