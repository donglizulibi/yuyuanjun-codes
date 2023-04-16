<script setup></script>

<template>
  <div>
    <router-link to="/home">home</router-link>
    <router-link to="/about">about</router-link>
  </div>
  <div class="router-view">
    <router-view />
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
