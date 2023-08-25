<template>
  <component :is="view"></component>
</template>

<script setup>
import { router } from "../router/index";
// import About from "../views/About.vue";
import { computed } from "vue";
import { path } from "../router/index";

// console.log(About);
console.log(router);
console.log(window.location);

const view = computed(() => {
  //   const path = window.location.pathname;
  console.log(path);
  const rez = router.routes.find((item) => {
    return item.path == path.value;
  });
  console.log(rez);
  console.log(rez.component);
  return rez.component;
  //   return About;
});
</script>

<style lang="scss" scoped></style>
