<template>
  <h3>attrs事件传递</h3>
  <lesson-attrs></lesson-attrs>
  <hr />
  <h3>$emit触发自定义事件</h3>
  <lesson-emit></lesson-emit>
  <hr />
  <h3>验证$emit自定义事件</h3>
  <lesson-checked></lesson-checked>
  <hr />
  <h3>v-model的自实现</h3>
  <achieve-vmodel></achieve-vmodel>
  <hr />
  <h3>v-model在vue3中的实现及其简写</h3>
  <vmodel-vue-three></vmodel-vue-three>
  <hr />
  <h3>双击编辑课程信息</h3>
  <lesson-double></lesson-double>
  <hr />
  <h3>多个v-model的使用</h3>
  <lesson-price></lesson-price>
  <hr />
  <h3>v-model的修饰符</h3>
  <lesson-modifier></lesson-modifier>
</template>

<script>
import LessonAttrs from "./components/LessonAttrs.vue";
import LessonEmit from "./components/LessonEmit.vue";
import LessonChecked from "./components/LessonChecked.vue";
import AchieveVmodel from "./components/AchieveVmodel.vue";
import VmodelVueThree from "./components/VmodelVueThree.vue";
import LessonDouble from "./components/LessonDouble.vue";
import LessonPrice from "./components/LessonPrice.vue";
import LessonModifier from "./components/LessonModifier.vue";
export default {
  components: {
    LessonAttrs,
    LessonEmit,
    LessonChecked,
    AchieveVmodel,
    VmodelVueThree,
    LessonDouble,
    LessonPrice,
    LessonModifier,
  },
};
</script>

<style lang="scss" scoped>
h3 {
  text-align: center;
}
</style>
