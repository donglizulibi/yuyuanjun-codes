<template>
  <router-view name="navigationUser" #default="slotprops">
    <component :is="slotprops.Component ?? Navigation"></component>
  </router-view>
  <div class="front-layout">
    <router-view />
  </div>
</template>

<script setup>
import Navigation from "@/components/Navigation.vue";
</script>

<style lang="scss" scoped>
.front-layout {
  padding: 20px;
  background-color: aliceblue;
}
</style>
