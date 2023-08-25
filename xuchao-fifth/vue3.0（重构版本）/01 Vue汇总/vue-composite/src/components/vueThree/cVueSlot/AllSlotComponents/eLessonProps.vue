<template>
  <div>
    <button v-on:click="refresh">恢复</button>
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
import db from "../../../../../data/lessonData";
import LessonPropsChild from "./eLessonPropsChild/LessonPropsChild.vue";
import deepCopy from "../../../../../utls/deepCopy";
export default {
  components: { LessonPropsChild },
  data() {
    return { Lessons: deepCopy(db) };
  },

  methods: {
    refresh() {
      this.Lessons = deepCopy(db);
    },
    del(id) {
      console.log(id);
      let index = this.Lessons.findIndex((l) => l.id == id);
      console.log(index);
      this.Lessons.splice(index, 1);
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  border: 1px solid black;
}
</style>
