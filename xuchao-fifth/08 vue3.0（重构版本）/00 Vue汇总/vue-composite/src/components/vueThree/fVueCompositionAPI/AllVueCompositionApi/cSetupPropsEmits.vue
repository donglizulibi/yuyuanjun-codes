<template>
  <div>
    <h4>vue2中props和emits复习</h4>
    <c-option-props-emits></c-option-props-emits>

    <h4>setup中使用props和emits</h4>
    <c-composition-props-emits></c-composition-props-emits>
  </div>
</template>

<script>
import cOptionPropsEmits from "./cSetupPropsEmitsChild/cOptionPropsEmits.vue";
import cCompositionPropsEmits from "./cSetupPropsEmitsChild/cCompositionPropsEmits.vue";
export default {
  components: {
    cOptionPropsEmits,
    cCompositionPropsEmits,
  },
};
</script>

<style lang="scss" scoped></style>
