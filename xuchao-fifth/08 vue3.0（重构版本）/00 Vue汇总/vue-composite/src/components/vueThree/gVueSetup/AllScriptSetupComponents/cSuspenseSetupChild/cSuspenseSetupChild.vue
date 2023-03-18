<template>
  <div>
    <!-- <p v-for="item in arr" :key="item.id">{{ item.title }}</p> -->
    {{ arr }}
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
const arr = ref([]);

let res = await axios({
  method: "get",
  url: "http://127.0.0.1:3003/news",
}).then((val) => {
  console.log(val);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(val);
    }, 1000);
  });
});

console.log(res);

arr.value.push(...res.data);

// onMounted(async () => {
// });
</script>

<style lang="scss" scoped></style>
