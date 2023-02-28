<template>
  <h5>在父组件中遍历数据，在生成多个子组件的时候把数据传到子组件插槽中</h5>
  <h5>并给插槽中的按键绑定事件，以实现删除功能</h5>
  <div>
    <lesson-slot-child v-for="lesson in Lessons" :key="lesson.id" :lesson="lesson">
      <hd-button @click="del(lesson)">删除</hd-button>
    </lesson-slot-child>
  </div>
</template>

<script>
import LessonSlotChild from "./Child/LessonSlotChild.vue";
import deepCopy from "../../../../../../utls/deepCopy";
import db from "../../../../../../data/lessonData";
import HdButton from "../Tool/Button.vue";
export default {
  components: {
    LessonSlotChild,
    HdButton,
  },
  data() {
    return {
      Lessons: deepCopy(db),
    };
  },
  methods: {
    del(lesson) {
      console.log(lesson);
      let index = this.Lessons.findIndex((l) => l.id == lesson.id);
      this.Lessons.splice(index, 1);
    },
  },
};
</script>

<style lang="scss" scoped></style>
