<template>
  <!-- <div></div> -->
  <div class="classList">
    <div v-for="(lesson, index) in lessons" :key="index">
      <span :class="{ is_delete: lesson.isDelete }">{{ lesson.title }}</span>
      <button @click="lesson.isDelete = !lesson.isDelete">
        {{ lesson.isDelete ? "取消" : "删除" }}
      </button>
    </div>
  </div>
</template>

<script>
import lessons from "./Lesson";
export default {
  data() {
    return {
      lessons,
    };
  },
  beforeCreate() {
    console.log(lessons);
  },
};
</script>

<style lang="scss" scoped>
.classList {
  .is_delete {
    text-decoration: line-through;
    background-color: red;
  }
  button {
    border: 2px solid black;
  }
}
</style>
