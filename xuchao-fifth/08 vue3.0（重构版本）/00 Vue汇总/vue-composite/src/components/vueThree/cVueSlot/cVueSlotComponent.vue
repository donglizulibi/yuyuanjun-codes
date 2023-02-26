<template>
  <div>
    <h3>1）slot插槽的基本使用</h3>
    <a-card-base></a-card-base>

    <h3>2）插槽的作用域</h3>
    <b-card-area></b-card-area>
  </div>
</template>

<script>
import aCardBase from "./AllSlotComponents/aCardBase.vue";
import bCardArea from "./AllSlotComponents/bCardArea.vue";
export default {
  components: {
    aCardBase,
    bCardArea,
  },
};
</script>

<style lang="scss" scoped></style>
