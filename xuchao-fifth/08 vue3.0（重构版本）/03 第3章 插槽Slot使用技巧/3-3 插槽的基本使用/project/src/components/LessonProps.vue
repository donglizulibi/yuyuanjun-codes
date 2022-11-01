<template>
  <div>
    <lesson-props-child
      v-for="lesson in Lessons"
      :lesson="lesson"
      :key="lesson.id"
      @hd="del"
    >
    </lesson-props-child>
  </div>
</template>

<script>
import db from "../../data/db.js";
import LessonPropsChild from "./Child/LessonPropsChild.vue";
import deepCopy from "../../utils/deepCopy";
export default {
  components: { LessonPropsChild },
  data() {
    return { Lessons: deepCopy(db) };
  },
  methods: {
    del(id) {
      console.log(id);
      let index = this.Lessons.findIndex((l) => l.id == id);
      console.log(index);
      this.Lessons.splice(index, 1);
    },
  },
};
</script>

<style lang="scss" scoped></style>
