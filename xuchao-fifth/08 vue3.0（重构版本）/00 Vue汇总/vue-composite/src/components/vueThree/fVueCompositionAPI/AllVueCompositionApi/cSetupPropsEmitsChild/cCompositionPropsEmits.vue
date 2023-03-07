<template>
  <div>
    <c-composition-props-emits-child></c-composition-props-emits-child>
  </div>
</template>

<script>
import cCompositionPropsEmitsChild from "./child/cCompositionPropsEmitsChild.vue";
export default {
  components: {
    cCompositionPropsEmitsChild,
  },
};
</script>

<style lang="scss" scoped></style>
