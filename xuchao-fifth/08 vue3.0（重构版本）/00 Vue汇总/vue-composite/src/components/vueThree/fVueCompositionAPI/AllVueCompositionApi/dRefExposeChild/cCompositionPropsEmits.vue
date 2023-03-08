<template>
  <div>
    <c-composition-props-emits-child :init="4" @change="changeHandle" />
    父组件的区域：{{ num }}

    <br />
  </div>
</template>

<script>
import cCompositionPropsEmitsChild from "./child/cCompositionPropsEmitsChild.vue";
import { ref } from "vue";
export default {
  components: {
    cCompositionPropsEmitsChild,
  },
  setup() {
    let num = ref(0);
    const changeHandle = (v) => {
      num.value = v;
    };
    return { num, changeHandle };
  },
};
</script>

<style lang="scss" scoped></style>
