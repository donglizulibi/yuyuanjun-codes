<template>
  <router-link v-for="article of articles" :key="article.id" :to="`/show/${article.id}`">
    <div class="list-item">
      {{ article.title }}
    </div>
  </router-link>
</template>

<script setup>
import { ref } from "vue";
import useArticle from "@/api/article";

const articles = ref(await useArticle.all());
// const props = defineProps({
//   article: {
//     type: Object,
//   },
// });
</script>

<style lang="scss" scoped>
.list-item {
  background-color: forestgreen;
  color: aliceblue;
  margin-bottom: 10px;
  padding: 10px;
}
</style>
