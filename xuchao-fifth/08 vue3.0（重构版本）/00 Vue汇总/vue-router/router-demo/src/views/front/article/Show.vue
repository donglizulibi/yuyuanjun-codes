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
<script>
import useArticle from "@/api/article";
import { useRoute } from "vue-router";
import ListArticle from "@/components/ListArticle.vue";
import { watch, ref } from "vue";
export default {
  async setup() {
    const route = useRoute();
    const article = ref(await useArticle.find(route.params.id));
    watch(route, async (v, m) => {
      if (m.params.id) {
        article.value = await useArticle.find(m.params.id);
      }
    });
    return { route, article };
  },
  components: {
    ListArticle,
  },
  beforeRouteLeave(to, from, next) {
    console.log("beforeRouteLeave");
    next();
  },
  beforeRouteUpdate(to, from, next) {
    console.log("beforeRouteUpdate");
    next();
  },
  beforeUnmount() {
    console.log("beforeUnmount");
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
};
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
