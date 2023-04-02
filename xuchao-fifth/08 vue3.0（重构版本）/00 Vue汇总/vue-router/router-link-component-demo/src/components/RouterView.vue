<template>
  <component :is="view"></component>
</template>

<script setup>
import { router } from "../router/index";
import About from "../views/About.vue";
import { computed } from "vue";
console.log(About);
console.log(router);

const view = computed(() => {});
</script>

<style lang="scss" scoped></style>
