<template>
  <div class="navigation">
    <router-link :to="{ name: 'home' }">首页</router-link>
    <router-link
      :class="{ 'link-active': /user/.test($route.path) }"
      :to="{ name: 'user' }"
      >用户</router-link
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
  // width: auto;
  a {
    // margin-left: 10px;
    display: inline-block;
    color: black;
    font-weight: bold;
    padding: 5px 10px;
    border-radius: 2px;
    // &.routerLinkClass {
    //   background-color: orange;
    // }
    // &.show {
    //   background-color: orange;
    // }
    // &.user {
    //   background-color: orange;
    // }
  }
}
</style>
