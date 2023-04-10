<template>
  <router-link v-for="user of users" :key="user.id" :to="`/user/${user.id}`">
    <div class="list-item">
      {{ user.name }}
    </div>
  </router-link>
</template>

<script setup>
import { ref } from "vue";
import useUser from "@/api/user.js";

const users = ref(await useUser.all());
// const props = defineProps({
//   article: {
//     type: Object,
//   },
// });
</script>

<style lang="scss" scoped>
.list-item {
  background-color: chocolate;
  color: aliceblue;
  margin-bottom: 10px;
  padding: 10px;
}
</style>
