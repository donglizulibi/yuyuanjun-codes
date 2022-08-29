<template>
  <!-- v-for遍历数组 -->
  <div v-for="(lesson, index) of Lessons" :key="lesson.id">
    <div v-if="!lesson.isDelete" style="background-color: blue">
      {{ lesson.title }}-{{ index }}
    </div>
    <div v-else style="background-color: red">{{ lesson.title }}-{{ index }}</div>
  </div>
  <div style="margin-top: 10px">
    <hr />
  </div>

  <!-- v-for遍历对象 -->
  <div v-for="(value, key, index) in obj" :key="index">
    value:{{ value }} || key:{{ key }} || index:{{ index }}
  </div>
</template>

<script>
import Lessons from "../../data/Lesson_for";
export default {
  data() {
    return {
      Lessons,
      obj: {
        name: "houdunren",
        age: 18,
        sex: "male",
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
