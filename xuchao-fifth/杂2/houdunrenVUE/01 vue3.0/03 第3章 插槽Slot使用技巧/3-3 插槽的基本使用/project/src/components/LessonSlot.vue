<template>
  <div>
    <lesson-slot-child v-for="lesson in Lessons" :key="lesson.id" :lesson="lesson">
      <hd-button @click="del(lesson)">删除</hd-button>
    </lesson-slot-child>
  </div>
</template>

<script>
import deepCopy from "../../utils/deepCopy";
import db from "../../data/db.js";
import LessonSlotChild from "./Child/LessonSlotChild.vue";
import HdButton from "./Tool/Button.vue";
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
