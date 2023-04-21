<template>
  <div class="article">
    <h2>
      {{ articles.title }}
    </h2>
    <main>
      {{ articles.content }}
    </main>
  </div>
  <router-link :to="{ name: 'articleSetup', params: { id: currentPageData } }">
    <!-- <Pagination
      :totalPages="10"
      @update:modelValue="getpage"
      :modelValue="currentPageData"
    /> -->
    <Pagination :totalPagesData="articles.total" v-model="currentPageData" />
  </router-link>
</template>

<script setup>
import axios from "axios";
import Pagination from "../components/Pagination.vue";
import { ref } from "vue";
import { onBeforeRouteUpdate, onBeforeRouteLeave, useRoute } from "vue-router";
const load = async (id) => {
  let res = await axios({
    url: `http://127.0.0.1:3003/article/${id}`,
  });
  return res.data;
};
const route = useRoute();
const articles = ref("");

const currentPageData = ref(route.params.id);
articles.value = await load(currentPageData.value);

onBeforeRouteUpdate(async (to, from) => {
  currentPageData.value = to.params.id;
  articles.value = await load(to.params.id);
});
</script>

<style lang="scss" scoped>
.article {
}
</style>
