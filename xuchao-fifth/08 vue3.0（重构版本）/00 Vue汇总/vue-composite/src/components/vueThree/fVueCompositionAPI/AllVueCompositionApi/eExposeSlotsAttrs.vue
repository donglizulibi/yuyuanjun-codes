<template>
  <div>
    <h4>setup中使用expose里的attrs</h4>
    <a-expose-attrs></a-expose-attrs>

    <h4>setup中使用expose里的slots</h4>
    <b-expose-slots></b-expose-slots>
  </div>
</template>

<script>
import aExposeAttrs from "./eExposeSlotsAttrsChild/aExposeAttrs.vue";
import bExposeSlots from "./eExposeSlotsAttrsChild/bExposeSlots.vue";
export default {
  components: {
    aExposeAttrs,
    bExposeSlots,
  },
};
</script>

<style lang="scss" scoped></style>
