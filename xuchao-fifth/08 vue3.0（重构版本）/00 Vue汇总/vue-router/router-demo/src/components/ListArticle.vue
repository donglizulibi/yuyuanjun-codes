<template>
  <Card>
    <template v-slot:header>
      <div>文章列表</div>
    </template>
    <router-link
      v-for="article of articles"
      :key="article.id"
      :to="{ name: 'show', params: { id: article.id } }"
    >
      <!-- :to="`/show/${article.id}`" -->
      <div class="list-item">
        {{ article.title }}
      </div>
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

<style lang="scss" scoped>
.list-item {
  background-color: forestgreen;
  color: aliceblue;
  margin-bottom: 10px;
  padding: 10px;
}
</style>
