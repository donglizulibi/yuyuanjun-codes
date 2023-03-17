<template>
  <div>
    <h4>1.script-setup规范defineProps传值及单向数据流验证</h4>
    <a-vue-three-props-emits></a-vue-three-props-emits>

    <h4>2.script-setup中使用defineEmits</h4>
    <b-define-emits></b-define-emits>

    <h4>3.todo例子初步</h4>
    <c-define-props-emits-demo></c-define-props-emits-demo>
  </div>
</template>

<script setup>
import aVueThreePropsEmits from "./dDefinePropsEmitsChild/aVueThreePropsEmits.vue";
import bDefineEmits from "./dDefinePropsEmitsChild/bDefineEmits.vue";
import cDefinePropsEmitsDemo from "./dDefinePropsEmitsChild/cDefinePropsEmitsDemo.vue";
</script>

<style lang="scss" scoped></style>
