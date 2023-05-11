<template>
  <div class="article">
    <h2>
      {{ articles.title }}
    </h2>
    <main>
      {{ articles.content }}
    </main>
  </div>
  <router-link :to="{ name: 'articleWatch', params: { id: currentPageData } }">
    <Pagination :totalPagesData="articles.total" v-model="currentPageData" />
  </router-link>
</template>

<script setup>
import axios from "axios";
import Pagination from "../components/Pagination.vue";
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
const load = async (id) => {
  const res = await axios({
    url: `http://127.0.0.1:3003/article/${id}`,
  });
  return res.data;
};
const route = useRoute();
const articles = ref("");
const currentPageData = ref(route.params.id);

watch(
  route,
  async (route) => {
    if (route.name == "articleWatch") {
      currentPageData.value = route.params.id;
      articles.value = await load(route.params.id);
    }
  },
  { immediate: true }
);
</script>

<style lang="scss" scoped>
.article {
}
</style>
