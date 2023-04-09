<template>
  <div class="show">
    <!-- {{ $route }} -->
    <h2>{{ article.title }}</h2>
    <div class="content">{{ article.content }}</div>
  </div>
</template>

<script setup>
import useArticle from "@/api/article";
import { useRoute } from "vue-router";
const route = useRoute();
// console.log(route);
const id = route.params.id;

// const id = route.query.id;
// console.log(id);
// console.log($route);
const article = await useArticle.find(id);
// console.log(article);
</script>

<style lang="scss" scoped>
.content {
  text-align: left;
  line-height: 1.6em;
}
</style>
