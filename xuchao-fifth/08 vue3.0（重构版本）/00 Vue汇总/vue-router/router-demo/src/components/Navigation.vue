<template>
  <div class="navigation">
    <router-link :to="{ name: 'home' }">首页</router-link>
    <router-link
      :class="{ 'link-active': /show/.test($route.path) }"
      :to="{ name: 'article' }"
      >文章列表</router-link
    >
    <router-link
      :class="{ 'link-active': /user/.test($route.path) }"
      :to="{ name: 'user' }"
      >用户</router-link
    >
    <router-link
      :class="{ 'link-active': /member/.test($route.path) }"
      :to="{ name: 'mobile' }"
      >会员中心</router-link
    >
    <!-- <router-link :to="{ name: 'home' }">home</router-link>
    <router-link :to="{ name: 'article' }">article</router-link> -->
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.navigation {
  margin-bottom: 20px;
  text-align: left;
  background-color: aliceblue;
  display: inline-block;

  a {
    // margin-left: 10px;
    color: black;
    font-weight: bold;
    padding: 5px 10px;
    border-radius: 2px;
    display: inline-block;
    // width: 80px;
    // &.routerLinkClass {
    //   background-color: orange;
    // }
    // &.show {
    //   background-color: orange;
    // }
    // &.user {
    //   background-color: orange;
    // }
    // &.member {
    //   background-color: orange;
    // }
  }
}
</style>
