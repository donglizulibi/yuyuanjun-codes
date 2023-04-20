<template>
  <div class="article">
    <h2>
      {{ articles.title }}
    </h2>
    <main>
      {{ articles.content }}
    </main>
  </div>
  <router-link :to="{ name: 'article', params: { id: params } }">
    <Pagination :totalPages="10" @current="getpage" :currentPageData="currentPageData" />
  </router-link>
</template>

<script>
import axios from "axios";
import Pagination from "../components/Pagination.vue";
const load = (id) => {
  return axios({
    url: `http://127.0.0.1:3003/article/${id}`,
  });
};
export default {
  components: { Pagination },
  data() {
    return {
      articles: [],
      params: this.$route.params.id,
      currentPageData: "",
    };
  },
  beforeRouteEnter(to, from, next) {
    next(async (vm) => {
      const val = await load(vm.params);
      vm.articles = val.data;
      vm.currentPageData = vm.params;
    });
  },
  async beforeRouteUpdate(to, from) {
    this.currentPageData = to.params.id;
    const val = await load(to.params.id);
    this.articles = val.data;
  },
  methods: {
    getpage(e) {
      this.params = e;
    },
  },
};
</script>

<style lang="scss" scoped>
.article {
}
</style>
