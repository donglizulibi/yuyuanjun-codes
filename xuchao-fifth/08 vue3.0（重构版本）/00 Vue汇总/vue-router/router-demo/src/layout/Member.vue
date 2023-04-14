<template>
  <Navigation />
  <div class="layout-member">
    <nav>
      <router-link :to="{ name: 'mobile' }">修改手机号</router-link>
      <router-link :to="{ name: 'email' }">绑定邮箱</router-link>
    </nav>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup>
import Navigation from "@/components/Navigation.vue";
</script>

<style lang="scss" scoped>
.layout-member {
  display: grid;
  grid-template-columns: repeat((12, 1fr));
  nav {
    // background-color: cadetblue;
    grid-column: span 3;
    a {
      color: aliceblue;
      display: inline-block;
      padding: 5px;
      margin-bottom: 10px;
      width: 100%;
    }
    .router-link-exact-active {
      background-color: brown;
    }
  }
  main {
    grid-column: span 9;
  }
}
</style>
