<template>
  <router-view name="navigationUser" #default="slotprops">
    <div class="nav">
      <component :is="slotprops.Component ?? Navigation"></component>
    </div>
  </router-view>
  <div class="front-layout">
    <router-view />
  </div>
</template>

<script setup>
import Navigation from "@/components/Navigation.vue";
</script>

<style lang="scss" scoped>
.nav {
  text-align: left;
}
.front-layout {
  padding: 20px;
  background-color: aliceblue;
}
</style>
