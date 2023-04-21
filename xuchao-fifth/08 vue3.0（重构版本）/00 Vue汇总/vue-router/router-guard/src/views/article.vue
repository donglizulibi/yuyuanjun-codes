<template>
  <div class="article">
    <h2>
      {{ articles.title }}
    </h2>
    <main>
      {{ articles.content }}
    </main>
  </div>
  <router-link :to="{ name: 'article', params: { id: currentPageData } }">
    <!-- <Pagination
      :totalPages="10"
      @update:modelValue="getpage"
      :modelValue="currentPageData"
    /> -->
    <Pagination :totalPagesData="articles.total" v-model="currentPageData" />
  </router-link>
</template>

<script>
import axios from "axios";
import Pagination from "../components/Pagination.vue";
const load = async (id) => {
  const res = await axios({
    url: `http://127.0.0.1:3003/article/${id}`,
  });
  return res.data;
};
export default {
  components: { Pagination },
  data() {
    return {
      articles: { total: "", content: "", title: "" },
      currentPageData: this.$route.params.id ?? 1,
    };
  },

  beforeRouteEnter(to, from, next) {
    next(async (vm) => {
      vm.articles = await load(vm.currentPageData);
    });
  },
  async beforeRouteUpdate(to, from) {
    this.currentPageData = to.params.id;
    this.articles = await load(to.params.id);
  },
};
</script>

<style lang="scss" scoped>
.article {
}
</style>
