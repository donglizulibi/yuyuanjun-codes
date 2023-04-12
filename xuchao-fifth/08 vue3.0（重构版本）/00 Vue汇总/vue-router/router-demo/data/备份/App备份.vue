<script setup>
// import Navigation from "@/components/Navigation.vue";
</script>

<template>
  <!-- <router-link to="/">home</router-link>
  <router-link to="article">article</router-link> -->
  <suspense>
    <template #default>
      <div>
        <!-- <Navigation /> -->
        <router-view name="navigationUser" #default="slotprops">
          <component :is="slotprops.Component ?? Navigation" />
        </router-view>
        <!-- <router-view name="navigationUser" #default="slotprops">
          <component :is="slotprops.Component ?? Navigation" />
        </router-view> -->
        <!-- <router-view #default="slotprops"> -->
        <!-- <router-view name="navigationUser"> -->
        <!-- <component :is="Navigation" /> -->
        <!-- </router-view> -->

        <!-- 视频中使用的解构语法 -->
        <!-- <router-view #default="{route, Component }"> -->
        <!-- {{ slotprops.route }} -->
        <!-- <div :class="slotprops.route.meta?.class">
            <component :is="slotprops.Component" />
          </div> 
        </router-view> -->

        <!-- <router-view  #default="slotprops">
          <div class="router-view">
            <component :is="slotprops.Component" />
          </div>
        </router-view> -->

        <!-- 直接使用 -->
        <div class="router-view">
          <router-view name="default" />
        </div>
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
