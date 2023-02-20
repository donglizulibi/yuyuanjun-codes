<template>
  <div>
    <h4>给图片添加删除按钮以及图片无效时的显示</h4>
    <a-lesson-attrs></a-lesson-attrs>

    <h4>$emit触发自定义事件</h4>
    <b-lesson-emit></b-lesson-emit>

    <h4>对$emit自定义事件传递参数的校验并添加弹窗</h4>
    <c-lesson-checked></c-lesson-checked>
  </div>
</template>

<script>
import aLessonAttrs from "./AllEventComponents/aLessonAttrs.vue";
import bLessonEmit from "./AllEventComponents/bLessonEmit.vue";
import cLessonChecked from "./AllEventComponents/cLessonChecked.vue";
export default {
  components: {
    aLessonAttrs,
    bLessonEmit,
    cLessonChecked,
  },
};
</script>

<style lang="scss" scoped></style>
