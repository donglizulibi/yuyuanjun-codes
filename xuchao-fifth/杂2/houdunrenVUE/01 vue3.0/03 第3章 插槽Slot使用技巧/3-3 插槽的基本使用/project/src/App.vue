<script>
import CardBase from "./components/CardBase.vue";
import CardArea from "./components/CardArea.vue";
import ButtonBack from "./components/ButtonBack.vue";
import NamedSlot from "./components/NamedSlot.vue";
import LessonProps from "./components/LessonProps.vue";
import LessonSlot from "./components/LessonSlot.vue";
import LessonSlotProps from "./components/LessonSlotProps.vue";
export default {
  components: {
    CardBase,
    CardArea,
    ButtonBack,
    NamedSlot,
    LessonProps,
    LessonSlot,
    LessonSlotProps,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<template>
  <div>
    <h3>插槽的基本使用</h3>
    <card-base />
    <hr />
    <h3>插槽的作用域</h3>
    <card-area />
    <hr />
    <h3>插槽的后备内容</h3>
    <button-back />
    <hr />
    <h3>具名插槽的使用</h3>
    <named-slot></named-slot>
    <hr />
    <h3>props与emit的复习</h3>
    <lesson-props></lesson-props>
    <hr />
    <h3>插槽实现删除</h3>
    <lesson-slot></lesson-slot>
    <hr />
    <h3>插槽的props实现删除</h3>
    <lesson-slot-props></lesson-slot-props>
  </div>
</template>

<style scoped>
button {
  border: 2px solid black;
}
</style>
