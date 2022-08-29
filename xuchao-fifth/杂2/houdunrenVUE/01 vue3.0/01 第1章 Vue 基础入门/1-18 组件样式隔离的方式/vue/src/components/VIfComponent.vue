<template>
  <div>=========间隔========</div>
  <template v-for="(lesson, key) in Lessons" :key="index">
    <div v-if="lesson.isDelete" style="background-color: red">{{ lesson.title }}</div>
    <div v-else-if="lesson.price > 100" style="background-color: green">
      {{ lesson.title }}
    </div>
    <template v-else>{{ lesson.title }}</template>
  </template>
</template>

<script>
import Lessons from "../../data/Lesson_if";
export default {
  data() {
    return {
      Lessons,
    };
  },
  beforeCreate() {
    console.log(Lessons);
  },
};
</script>

<style lang="scss" scoped></style>
