<script setup>
import Navigation from "@/components/Navigation.vue";
</script>

<template>
  <!-- <router-link to="/">home</router-link>
  <router-link to="article">article</router-link> -->
  <suspense>
    <template #default>
      <div class="router-view">
        <router-view />
      </div>
    </template>
  </suspense>
</template>

<style scoped>
a {
  margin: 20px;
}

/* .home {
  padding: 20px;
  background-color: brown;
}
.article {
  padding: 20px;
  background-color: aliceblue;
} */
</style>
