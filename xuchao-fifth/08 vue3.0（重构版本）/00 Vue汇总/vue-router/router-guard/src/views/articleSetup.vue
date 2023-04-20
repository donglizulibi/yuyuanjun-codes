<template>
  <div class="article">
    <h2>
      {{ articles.title }}
    </h2>
    <main>
      {{ articles.content }}
    </main>
  </div>
  <router-link :to="{ name: 'articleSetup', params: { id: params } }">
    <Pagination :totalPages="10" @current="getpage" :currentPageData="currentPageData" />
  </router-link>
</template>

<script setup>
import axios from "axios";
import Pagination from "../components/Pagination.vue";
import { ref } from "vue";
import { onBeforeRouteUpdate, onBeforeRouteLeave, useRoute } from "vue-router";
const load = (id) => {
  return axios({
    url: `http://127.0.0.1:3003/article/${id}`,
  });
};
const route = useRoute();
const articles = ref("");
const currentPageData = ref(route.params.id);
const params = ref(route.params.id);
const getpage = (e) => {
  params.value = e;
};
articles.value = await load(route.params.id).then((val) => val.data);
onBeforeRouteUpdate(async (to, from) => {
  currentPageData.value = to.params.id;
  articles.value = await load(to.params.id).then((val) => val.data);
});
</script>

<style lang="scss" scoped>
.article {
}
</style>
