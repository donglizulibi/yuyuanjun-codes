<script setup>
import Navigation from "./components/Navigation.vue";
</script>

<template>
  <!-- <router-link to="/">home</router-link>
  <router-link to="article">article</router-link> -->
  <suspense>
    <template #default>
      <div>
        <Navigation />

        <hr />
        <router-view></router-view>
      </div>
    </template>
  </suspense>
</template>

<style scoped>
a {
  margin: 20px;
}
</style>
