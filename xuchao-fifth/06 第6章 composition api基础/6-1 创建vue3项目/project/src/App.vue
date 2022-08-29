<template>
  <h3>选项api的用法</h3>
  <count-option-vue></count-option-vue>
  <hr />
  <h3>组合api的用法</h3>
  <count-composition-vue></count-composition-vue>
</template>

<script>
import CountOptionVue from "./components/CountOption.vue";
import CountCompositionVue from "./components/CountComposition.vue";
export default {
  components: { CountOptionVue, CountCompositionVue },
};
</script>

<style lang="scss" scoped></style>
