<script setup></script>

<template>
  <!-- <router-link to="/">home</router-link>
  <router-link to="article">article</router-link> -->
  <router-link :to="{ name: 'home' }">home</router-link>
  <router-link :to="{ name: 'article' }">article</router-link>
  <hr />
  <router-view></router-view>
</template>

<style scoped>
a {
  margin: 20px;
}
</style>
