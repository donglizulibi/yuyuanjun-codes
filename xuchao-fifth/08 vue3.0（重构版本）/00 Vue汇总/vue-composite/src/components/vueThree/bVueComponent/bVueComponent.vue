<template>
  <div>
    <h3 v-on:click="aBasePropsShow">1）props的基本用法</h3>
    <a-base-props v-if="aBasePropsState"></a-base-props>
  </div>
</template>

<script>
import aBaseProps from "./aBaseProps/aBaseProps.vue";
export default {
  components: {
    aBaseProps,
  },
  data() {
    return {
      aBasePropsState: true,
    };
  },
  methods: {
    aBasePropsShow() {
      this.aBasePropsState = !this.aBasePropsState;
    },
  },
};
</script>

<style lang="scss" scoped></style>
