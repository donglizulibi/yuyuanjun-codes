<template>
  <div>
    <router-link :to="{ name: 'home' }">home</router-link>
    <router-link :to="{ name: 'article' }">article</router-link>
  </div>
</template>

<script setup>
// import
</script>

<style lang="scss" scoped>
a {
  margin-left: 10px;
  color: black;
  font-weight: bold;
}
</style>
