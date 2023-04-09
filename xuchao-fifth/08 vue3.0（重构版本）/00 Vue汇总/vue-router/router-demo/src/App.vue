<script setup>
import Navigation from "@/components/Navigation.vue";
</script>

<template>
  <!-- <router-link to="/">home</router-link>
  <router-link to="article">article</router-link> -->
  <suspense>
    <template #default>
      <div>
        <Navigation />
        <!-- 视频中使用的解构语法 -->
        <!-- <router-view #default="{route, Component }"> -->
        <router-view #default="slotprops">
          <!-- {{ slotprops.route }} -->
          <!-- <div :class="slotprops.route.meta?.class">
            <component :is="slotprops.Component" />
          </div> -->
          <div class="router-view">
            <component :is="slotprops.Component" />
          </div>
        </router-view>
      </div>
    </template>
  </suspense>
</template>

<style scoped>
a {
  margin: 20px;
}
.router-view {
  padding: 20px;
  background-color: aliceblue;
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
