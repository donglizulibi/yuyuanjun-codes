<template>
  <div>
    <h4>在slot位置放置按钮组件</h4>
    <lesson-slot></lesson-slot>

    <h4>使用插槽slot的props</h4>
    <lesson-slot-props></lesson-slot-props>
  </div>
</template>

<script>
import LessonSlot from "./fTwoLessonSlotPropsChild/LessonSlot.vue";
import LessonSlotProps from "./fTwoLessonSlotPropsChild/LessonSlotProps.vue";
export default {
  components: {
    LessonSlot,
    LessonSlotProps,
  },
};
</script>

<style lang="scss" scoped></style>
