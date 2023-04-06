<template>
  <div class="navigation">
    <!-- <router-link exact-active-class="routerLinkClass" :to="{ name: 'home' }"
      >home</router-link
    >
    <router-link exact-active-class="routerLinkClass" :to="{ name: 'article' }"
      >article</router-link
    > -->
    <router-link :to="{ name: 'home' }">home</router-link>
    <router-link :to="{ name: 'article' }">article</router-link>
  </div>
</template>

<script setup>
// import
</script>

<style lang="scss" scoped>
.navigation {
  a {
    margin-left: 10px;
    color: black;
    font-weight: bold;
    background-color: aliceblue;
    padding: 5px 10px;
    &.routerLinkClass {
      background-color: orange;
    }
  }
}
</style>
