<template>
  <div>
    <lesson-slot-props-child v-for="lesson in Lessons" :key="lesson.id" :lesson="lesson">
      <!-- 如果子组件只有一个默认插槽，父组件中可以把插槽的绑定放到子组件标签上 -->
      <!-- 
    <lesson-slot-props-child 
        v-for="lesson in Lessons" 
        :key="lesson.id" 
        :lesson="lesson" 
        v-slot="slotProps"> 
    -->

      <template v-slot:icon> :） </template>

      <!-- 当使用默认插槽的时候绑定插槽props的方法 -->
      <template v-slot="slotProps">
        <!-- <template v-slot:default="slotProps"> -->
        <!-- <template #default="slotProps"> -->

        <!-- 当使用具名插槽的时候绑定插槽props的方法 -->
        <!-- <template v-slot:abc="slotProps"> -->

        <br />
        {{ slotProps }}
        <span @click="del(slotProps.id)">删除</span>
      </template>
    </lesson-slot-props-child>
  </div>
</template>

<script>
import LessonSlotPropsChild from "./Child/LessonSlotPropsChild.vue";
import deepCopy from "../../utils/deepCopy";
import db from "../../data/db";
export default {
  components: {
    LessonSlotPropsChild,
  },
  data() {
    return {
      Lessons: deepCopy(db),
    };
  },
  methods: {
    del(id) {
      let index = this.Lessons.findIndex((l) => l.id == id);
      console.log(index);
      this.Lessons.splice(index, 1);
    },
  },
};
</script>

<style lang="scss" scoped>
span {
  display: inline-block;
  cursor: pointer;
  border: 1px solid black;
  border-radius: 5px;
  height: 30px;
  width: 80px;
  padding: 5px;
  line-height: 30px;
}
</style>
