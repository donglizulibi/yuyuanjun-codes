<template>
  <div>
    <h3 v-on:click="directShow">1）vue的基础指令</h3>
    <a-v-direct v-if="directState"></a-v-direct>
  </div>
</template>

<script>
import aVDirect from "./aVDirect/aVDirect.vue";
export default {
  components: { aVDirect },
  data() {
    return {
      directState: true,
    };
  },
  methods: {
    directShow() {
      this.directState = !this.directState;
    },
  },
};
</script>

<style lang="scss" scoped></style>
