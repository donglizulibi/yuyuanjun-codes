<template>
  <div>
    <h4>在slot位置放置按钮组件</h4>
    <lesson-slot></lesson-slot>

    <h4>使用插槽slot的props</h4>
    <lesson-slot-props></lesson-slot-props>

    <h4>在插槽slot中切换组件</h4>
    <component-slot-props></component-slot-props>
  </div>
</template>

<script>
import LessonSlot from "./fTwoLessonSlotPropsChild/LessonSlot.vue";
import LessonSlotProps from "./fTwoLessonSlotPropsChild/LessonSlotProps.vue";
import componentSlotProps from "./fTwoLessonSlotPropsChild/componentSlotProps.vue";
export default {
  components: {
    LessonSlot,
    LessonSlotProps,
    componentSlotProps,
  },
};
</script>

<style lang="scss" scoped></style>
