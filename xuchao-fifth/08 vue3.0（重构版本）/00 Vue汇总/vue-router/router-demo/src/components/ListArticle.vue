<template>
  <Card>
    <template v-slot:header>
      <div>文章列表</div>
    </template>
    <router-link
      v-for="article of articles"
      :key="article.id"
      :to="{ name: 'show', params: { id: article.id } }"
      class="list-item"
    >
      <!-- 别名用法 -->
      <!-- :to="`${article.id}.html`" -->
      <!-- :to="`/show/${article.id}`" -->
      <!-- <div >
      </div> -->
      {{ article.title }}
    </router-link>
  </Card>
</template>

<script setup>
import { ref } from "vue";
import useArticle from "@/api/article";
import Card from "@/components/Card.vue";

const articles = ref(await useArticle.all());
// const props = defineProps({
//   article: {
//     type: Object,
//   },
// });
</script>

<style lang="scss">
.list-item {
  margin-bottom: 10px;
  background-color: forestgreen;
  padding: 10px;
  color: aliceblue;

  display: block;
  padding: 10px;
}
</style>
