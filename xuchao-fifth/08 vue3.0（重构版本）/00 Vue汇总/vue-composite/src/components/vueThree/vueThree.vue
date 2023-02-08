<script>
import aVueBase from "./aVueBase/aVueBase.vue";
export default {
  components: { aVueBase },
  data() {
    return {
      baseState: false,
    };
  },
  methods: {
    baseShow() {
      this.baseState = !this.baseState;
    },
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>

<template>
  <div>
    <h2 v-on:click="baseShow">1.vue3基础</h2>
    <a-vue-base v-if="baseState"></a-vue-base>

    <h2>2.vue3组件化开发</h2>
  </div>
</template>
