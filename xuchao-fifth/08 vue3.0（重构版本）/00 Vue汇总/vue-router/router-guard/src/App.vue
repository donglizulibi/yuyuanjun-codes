<script setup></script>

<template>
  <div>
    <router-link to="/">home</router-link>
    <router-link to="/about">about</router-link>
    <router-link to="/login">login</router-link>
    <router-link :to="{ name: 'article', params: { id: 1 } }">article</router-link>
    <router-link :to="{ name: 'articleSetup', params: { id: 1 } }"
      >articleSetup</router-link
    >
    <router-link :to="{ name: 'articleWatch', params: { id: 1 } }"
      >articleWatch</router-link
    >
  </div>
  <div class="router-view">
    <suspense>
      <template #default>
        <router-view />
      </template>
    </suspense>
  </div>
</template>

<style scoped>
a {
  display: inline-block;
  color: aliceblue;
  background-color: sienna;
  padding: 20px;
}
.router-view {
  background-color: aliceblue;
  padding: 20px;
  margin-top: 20px;
}
</style>
