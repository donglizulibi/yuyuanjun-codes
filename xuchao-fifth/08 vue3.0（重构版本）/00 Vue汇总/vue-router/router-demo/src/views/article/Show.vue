<template>
  <div class="article-show">
    <div class="show">
      <!-- {{ $route }} -->
      <h3>{{ article.title }}</h3>
      <div class="content">{{ article.content }}</div>
    </div>
    <div class="list-article">
      <list-article />
    </div>
  </div>
</template>

<script setup>
import useArticle from "@/api/article";
import { useRoute } from "vue-router";
import ListArticle from "@/components/ListArticle.vue";
import { ref, watch, watchEffect } from "vue";
const route = useRoute();
// console.log(route);
// const id = route.params.id;

// const id = route.query.id;
// console.log(id);
// console.log($route);
const article = ref();

// console.log(article);

watch(route, async () => {
  // console.log(route.params.id);
  if (route.params.id) {
    article.value = await useArticle.find(route.params.id);
  }
});
article.value = await useArticle.find(route.params.id);
// watchEffect(async () => {
//   article.value = await useArticle.find(route.params.id);
//   // console.log(route.params.id);
// });
</script>

<style lang="scss" scoped>
.article-show {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  .show {
    text-align: left;
    grid-column: span 4;
    .content {
      text-align: left;
      line-height: 1.6em;
    }
  }
  .list-article {
    grid-column: span 2;
    font-size: 12px;
  }
}
</style>
