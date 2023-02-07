<template>
  <template v-for="lesson in Lessons" :key="lesson.title">
    <div v-if="lesson.isDelete" style="background-color: red">{{ lesson.title }}</div>
    <div v-else-if="lesson.price > 100" style="background-color: green">
      {{ lesson.title }}
    </div>
    <template v-else>{{ lesson.title }}</template>
  </template>
</template>

<script>
import Lessons from "./Lesson_if";
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
