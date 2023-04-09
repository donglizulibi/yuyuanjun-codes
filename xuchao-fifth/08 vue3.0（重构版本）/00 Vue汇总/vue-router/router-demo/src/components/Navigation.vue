<template>
  <div class="navigation">
    <router-link exact-active-class="routerLinkClass" :to="{ name: 'home' }"
      >首页</router-link
    >
    <router-link
      exact-active-class="routerLinkClass"
      :class="{ show: showState }"
      :to="{ name: 'article' }"
      >文章列表</router-link
    >
    <!-- <router-link :to="{ name: 'home' }">home</router-link>
    <router-link :to="{ name: 'article' }">article</router-link> -->
  </div>
</template>

<script setup>
import { watch } from "vue";
import { useRoute } from "vue-router";
import { ref } from "vue";

const route = useRoute();
console.log(route);
const showState = ref(true);
watch(route, (v) => {
  // console.log(route);
  if (v.params.id) {
    showState.value = true;
  } else {
    showState.value = false;
  }
});
</script>

<style lang="scss" scoped>
.navigation {
  margin-bottom: 20px;
  a {
    margin-left: 10px;
    color: black;
    font-weight: bold;
    background-color: aliceblue;
    padding: 5px 10px;
    border-radius: 2px;
    &.routerLinkClass {
      background-color: orange;
    }
    &.show {
      background-color: orange;
    }
  }
}
</style>
