<template>
  <div>
    <h3>1）slot插槽的基本使用</h3>
    <a-card-base></a-card-base>

    <h3>2）插槽的作用域</h3>
    <b-card-area></b-card-area>

    <h3>3）插槽的后备内容</h3>
    <c-button-back></c-button-back>

    <h3>4）具名插槽的使用</h3>
    <d-named-slot></d-named-slot>

    <h3>5）课程实例复习</h3>
    <e-lesson-props></e-lesson-props>

    <h3>6）两种使用插槽实现删除功能的例子</h3>
    <f-two-lesson-slot-props></f-two-lesson-slot-props>
  </div>
</template>

<script>
import aCardBase from "./AllSlotComponents/aCardBase.vue";
import bCardArea from "./AllSlotComponents/bCardArea.vue";
import cButtonBack from "./AllSlotComponents/cButtonBack.vue";
import dNamedSlot from "./AllSlotComponents/dNamedSlot.vue";
import eLessonProps from "./AllSlotComponents/eLessonProps.vue";
import fTwoLessonSlotProps from "./AllSlotComponents/fTwoLessonSlotProps.vue";
export default {
  components: {
    aCardBase,
    bCardArea,
    cButtonBack,
    dNamedSlot,
    eLessonProps,
    fTwoLessonSlotProps,
  },
};
</script>

<style lang="scss" scoped></style>
