<template>
  <div>
    <h4>v-model的同效实现方法</h4>
    <a-achieve-vmodel></a-achieve-vmodel>

    <h4>v-model的updata实现原理</h4>
    <b-vmodel-vue-three></b-vmodel-vue-three>

    <h4>使用v-model实现双击修改课程</h4>
    <c-lesson-double></c-lesson-double>

    <h4>两组v-model实现修改价格</h4>
    <d-lesson-price></d-lesson-price>

    <h4>v-model的自定义修饰符</h4>
    <e-lesson-modifier></e-lesson-modifier>
  </div>
</template>

<script>
import aAchieveVmodel from "./AllVmodelComponent/aAchieveVmodel.vue";
import bVmodelVueThree from "./AllVmodelComponent/bVmodelVueThree.vue";
import cLessonDouble from "./AllVmodelComponent/cLessonDouble.vue";
import dLessonPrice from "./AllVmodelComponent/dLessonPrice.vue";
import eLessonModifier from "./AllVmodelComponent/eLessonModifier.vue";
export default {
  components: {
    aAchieveVmodel,
    bVmodelVueThree,
    cLessonDouble,
    dLessonPrice,
    eLessonModifier,
  },
};
</script>

<style lang="scss" scoped></style>
